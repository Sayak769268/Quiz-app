package com.dynamicquiz.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class QuizAutomation {

    // UPDATE THIS PATH TO YOUR LOCAL FILE PATH
    private static final String APP_URL = "file:///C:/Users/sayak%20mukherjee/Desktop/Dynamic%20Quiz/src/index.html";
    private static WebDriver driver;
    private static WebDriverWait wait;

    public static void main(String[] args) {
        setup();
        try {
            runTestScenario();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            teardown();
        }
    }

    private static void setup() {
        // Setup ChromeDriver automatically
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        System.out.println("LOG: Driver setup complete.");
    }

    private static void runTestScenario() throws InterruptedException, IOException {
        // 1. Verify Landing Page
        driver.get(APP_URL);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("landing-section")));
        
        String title = driver.getTitle();
        String currentUrl = driver.getCurrentUrl();
        System.out.println("LOG: Page Loaded. URL: " + currentUrl);
        System.out.println("LOG: Title: " + title);
        takeScreenshot("1_LandingPage");

        if (!title.contains("Dynamic Quiz App")) {
            System.err.println("ERROR: Incorrect Title!");
        }

        // 2. Start Quiz
        // Select 'General' and 'Easy' (Default, but good to verify interaction)
        // Click Start
        WebElement startBtn = driver.findElement(By.cssSelector("#quiz-setup-form .cta-button"));
        startBtn.click();
        
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("quiz-section")));
        System.out.println("LOG: Quiz Started.");
        takeScreenshot("2_QuizStarted");

        // 3. Question Navigation & Answer Selection
        // We know there are 5 questions in the 'easy' set.
        int totalQuestions = 5;
        
        for (int i = 1; i <= totalQuestions; i++) {
            System.out.println("LOG: answering Question " + i);
            
            // Verify Question Text is visible
            WebElement qText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("question-text")));
            System.out.println("LOG: Question Text: " + qText.getText());
            
            // Capture Start of Question
            takeScreenshot("3_Question_" + i + "_Start");

            // Select an answer (e.g., Option 2 (Index 1) for all, to get mixed results, or specific logic)
            // Requirement says: "Example: For question 1, select the answer option '3'."
            // Let's just pick the 2nd option (index 1) for simplicity to ensure some correct/incorrect.
            List<WebElement> options = driver.findElements(By.className("option-card"));
            if (options.size() >= 2) {
                options.get(1).click(); // Clicks the 2nd option
            } else {
                options.get(0).click(); // Fallback
            }
            
            // Click Next
            WebElement nextBtn = driver.findElement(By.id("next-btn"));
            wait.until(ExpectedConditions.elementToBeClickable(nextBtn));
            nextBtn.click();
            
            // Small pause for transition
            Thread.sleep(500); 
        }

        // 4. Submit Quiz
        // (Logic automatically submits after last question in our app, so checks result page)
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("result-section")));
        System.out.println("LOG: Quiz Submitted. Result Page Visible.");
        takeScreenshot("4_ResultPage");

        // 5. Score Calculation Verification
        WebElement scoreEl = driver.findElement(By.id("final-score"));
        String score = scoreEl.getText();
        System.out.println("LOG: Final Score Displayed: " + score);

        WebElement correctEl = driver.findElement(By.id("correct-count"));
        WebElement wrongEl = driver.findElement(By.id("wrong-count"));
        
        System.out.println("LOG: Correct: " + correctEl.getText());
        System.out.println("LOG: Wrong: " + wrongEl.getText());
        
        takeScreenshot("5_FinalAnalysis");
    }

    private static void takeScreenshot(String name) throws IOException {
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        String timestamp = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss").format(LocalDateTime.now());
        
        // Save in the 'automation' folder -> 'screenshots'
        File destFile = new File("screenshots/" + name + "_" + timestamp + ".png");
        
        // Ensure directory exists
        destFile.getParentFile().mkdirs();
        
        Files.copy(scrFile.toPath(), destFile.toPath());
        System.out.println("LOG: Screenshot saved to: " + destFile.getAbsolutePath());
    }

    private static void teardown() {
        if (driver != null) {
            driver.quit();
            System.out.println("LOG: Driver closed.");
        }
    }
}
