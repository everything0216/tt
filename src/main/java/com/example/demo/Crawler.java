package com.example.demo;
import com.example.demo.FinishedCourse;

import com.example.demo.dao.BasicEntity;
import com.example.demo.dao.TimeTableEntity;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.Point;
import org.openqa.selenium.chrome.ChromeDriver;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.concurrent.TimeUnit;

import net.sourceforge.tess4j.*;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class Crawler {
    static ChromeOptions options;
    static WebDriver driver;
    public static void CrawlerHandle(String userAccount, String userPassword) throws IOException, TesseractException, InterruptedException {

        System.setProperty("javax.net.ssl.trustStore", "jssecacerts"); //解決SSL問題
        System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\chromedriver.exe");

<<<<<<< Updated upstream
        //已完成課程
        ArrayList<FinishedCourse> fCourses = new ArrayList<FinishedCourse>();

        ChromeOptions options = new ChromeOptions();
=======
        options = new ChromeOptions();
>>>>>>> Stashed changes
        options.addArguments("–incognito");
        options.addArguments("remote-allow-origins=*");
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
        driver.get("https://ais.ntou.edu.tw/Default.aspx");
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);

        //登入
        while (true){
            //下載驗證碼圖片
            boolean flag = false;
            String captchaText = "";
            while (!flag) {
                WebElement element = driver.findElement(By.xpath("//img[@id='importantImg']"));
                File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
                BufferedImage image = ImageIO.read(screenshot);
                Point point = element.getLocation();
                int width = element.getSize().getWidth();
                int height = element.getSize().getHeight();
                BufferedImage subImage = image.getSubimage(point.getX()+350, point.getY()+132, width + 6, height + 4);
                ImageIO.write(subImage, "png", screenshot);
                File screenshotLocation = new File("test.png");
                FileUtils.copyFile(screenshot, screenshotLocation);
                System.out.println("驗證碼圖片已下載!!");
                //圖片辨識
                Tess tess = new Tess();
                tess.tessHandler();
                if (tess.text.length() == 4 && tess.text.matches("[a-zA-Z0-9]+")) {
                    flag = true;
                    captchaText = tess.text;
                } else {
                    element.click();
                    flag = false;
                    captchaText = "";
                    System.out.println("驗證碼字數不符合，換一張圖片重新辨識\n");
                }
            }
            //輸入帳號
            WebElement account = driver.findElement(By.name("M_PORTAL_LOGIN_ACNT"));
            account.clear();
            account.sendKeys(userAccount);

            //輸入密碼
            WebElement password = driver.findElement(By.name("M_PW"));
            password.sendKeys(userPassword);

            //輸入驗證碼
            WebElement check = driver.findElement(By.name("M_PW2"));
            check.sendKeys(captchaText);
            driver.findElement(By.name("LGOIN_BTN")).click();
            Alert alert = null;
            try {
                new WebDriverWait(driver, Duration.ofSeconds(1)).until(ExpectedConditions.alertIsPresent());
                alert = driver.switchTo().alert();
                if (alert != null)
                    alert.accept();
                System.out.println("驗證碼錯誤，重新登入\n");
            } catch (Exception e) {
                System.out.println("登入成功!!!\n");
                break;
            }
        }


        /*
        //登入後
        driver.switchTo().frame("menuFrame");
        driver.findElement(By.id("Menu_TreeViewt1")).click(); //教務系統
        Thread.sleep(3000);
        driver.findElement(By.linkText("成績系統")).click(); //成績系統
        Thread.sleep(3000);
        driver.findElement(By.linkText("查詢各式成績")).click(); //查詢各式成績
        driver.switchTo().defaultContent();
        driver.switchTo().frame("mainFrame");
        driver.findElement(By.xpath("//*[@id=\"RB_TYPE_3\"]")).click(); //歷年成績
        driver.findElement(By.xpath("//*[@id=\"QUERY_BTN1\"]")).click(); //查詢


        driver.switchTo().defaultContent();
        driver.switchTo().frame("viewFrame");
        Thread.sleep(3000);
//        System.out.println(driver.getPageSource());

        // 添加等待
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        //獲取scoretable
        List<WebElement> trList = driver.findElements(By.cssSelector("#DataGrid > tbody > tr"));
        for(WebElement row:trList){
            List<WebElement> cols= row.findElements(By.tagName("td"));
            System.out.println("=======================");
            for(int i = 0; i < cols.size(); i++){
                if(i == 0)  System.out.println(cols.get(i).getText());
                else if(i == 1)  System.out.println(cols.get(i).getText());
                else if(i == 3)  System.out.println(cols.get(i).getText());
                else if(i == 4)  System.out.println(cols.get(i).getText());
                else if(i == 5)  System.out.println(cols.get(i).getText());
                else if(i == 6)  System.out.println(cols.get(i).getText());
                else if(i == 7)  System.out.println(cols.get(i).getText());
            }
            System.out.println("=======================");
        }
        driver.close();*/
    }
    public static BasicEntity getBasicData(String studentID, String password) throws InterruptedException {//基本資料
        BasicEntity personalInformation = new BasicEntity();
        driver.switchTo().frame("menuFrame");
        driver.findElement(By.id("Menu_TreeViewt1")).click(); //教務系統
        Thread.sleep(3000);
        driver.findElement(By.linkText("學生基本資料維護作業")).click(); //學生基本資料維護作業
        Thread.sleep(3000);
        driver.findElement(By.linkText("維護舊生資料")).click(); //維護舊生資料
        driver.switchTo().defaultContent();
        driver.switchTo().frame("mainFrame");
        String name = driver.findElement(By.id("M_CH_NAME")).getText();
        String department = driver.findElement(By.id("M_TEACH_GRP_NAME")).getText();
        String grade = driver.findElement(By.id("M_GRADE_NAME")).getText();
        String team = driver.findElement(By.id("M_CLASSNO_NAME")).getText();//class
        String birth = driver.findElement(By.id("M_BIRTH_DATE")).getText();
        System.out.println("姓名 : "+name);
        System.out.println("系所 : "+department);
        System.out.println("年級 : "+grade);
        System.out.println("班級 : "+team);
        System.out.println("生日 : "+birth);
        personalInformation.setStudentID(studentID);
        personalInformation.setPassword(password);
        personalInformation.setName(name);
        personalInformation.setDepartment(department.replaceAll("[^\\u4E00-\\u9FA5]",""));
        personalInformation.setGrade(grade);
        personalInformation.setTeam(team);
        personalInformation.setBirth(birth);
        return personalInformation;
    }

    public static /*TimeTableEntity*/void getMyClass(String studentID, String password) throws InterruptedException{
        driver.switchTo().frame("menuFrame");
        driver.findElement(By.id("Menu_TreeViewt1")).click(); //教務系統
        Thread.sleep(3000);
        driver.findElement(By.linkText("選課系統")).click(); //選課系統
        Thread.sleep(3000);
        driver.findElement(By.linkText("學生個人選課清單課表列印")).click(); //學生個人選課清單課表列印
        driver.switchTo().defaultContent();
        driver.switchTo().frame("mainFrame");
        String nowYear = driver.findElement(By.id("AYEAR")).getText();//取得現在學年
        String nowSemester= driver.findElement(By.id("SMS")).getText();//取得現在學期
        //select選單 : 調整為目前學期
        driver.findElement(By.id("Q_AYEAR")).findElement(By.xpath("//option[@value='"+nowYear+"']")).click();
        driver.findElement(By.id("Q_SMS")).findElement(By.xpath("//option[@value='"+nowSemester+"']")).click();

        driver.findElement(By.xpath("//*[@id=\"QUERY_BTN1\"]")).click(); //選課清單
        //顯示20筆
        Thread.sleep(3000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].value = '20';", driver.findElement(By.id("PC_PageSize")));
        //driver.findElement(By.id("PC_PageSize")).sendKeys("20");
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"PC_ShowRows\"]")).click();
        Thread.sleep(3000);
        //已選課程表格
        List<WebElement> trList = driver.findElements(By.cssSelector("#DataGrid > tbody > tr"));
        for(int i = 1;i< trList.size();i++){
            WebElement row = trList.get(i);
            List<WebElement> cols= row.findElements(By.tagName("td"));
            System.out.println("課名 : " + cols.get(3).getText());
            System.out.println("課號 : " + cols.get(2).getText());
            driver.findElement(By.linkText(cols.get(2).getText())).click();

            if(i<9) driver.findElement(By.cssSelector("a[href=\"javascript:__doPostBack('DataGrid$ctl0"+(i+1)+"$COSID','')\"]")).click();
            else driver.findElement(By.cssSelector("a[href=\"javascript:__doPostBack('DataGrid$ctl"+(i+1)+"$COSID','')\"]")).click();
            List<WebElement> classNumbertrList = driver.findElements(By.cssSelector("#QTable2 > tbody > tr"));

            row = classNumbertrList.get(1);
            cols= row.findElements(By.tagName("td"));
            //String time2 = classNumbertrList.getText();
            //System.out.println("時間2 : " + time2);

            String time = cols.get(1).findElements(By.tagName("table")).get(0).findElements(By.tagName("tbody")).get(0).findElements(By.tagName("tr")).get(0).findElements(By.tagName("td")).get(0).getText();
            String classroom = cols.get(1).findElements(By.tagName("table")).get(0).findElements(By.tagName("tbody")).get(0).findElements(By.tagName("tr")).get(0).findElements(By.tagName("td")).get(1).getText();

            System.out.println("時間 : " + time);
            System.out.println("教室 : " + classroom);

        }

    }


    public static void main(String[] args) throws Exception {

        String account = "00957025";
        String password = "98586979";
        //System.out.println("系所 : "+password.replaceAll("[^\\u4E00-\\u9FA5]",""));
        //CrawlerHandle(account,password);
        //getBasicData(account,password);
        //getMyClass(account,password);
        String dateTime = DateTimeFormatter.ofPattern("yyyy MM dd")
                .format(LocalDateTime.now());
        System.out.println(dateTime);
    }
}

