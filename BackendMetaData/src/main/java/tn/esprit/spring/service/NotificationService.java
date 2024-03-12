package tn.esprit.spring.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@EnableScheduling // Enables scheduling for the Spring application
@Service
public class NotificationService  implements  MailService{


    ////anaa abrarrr
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String toEmail, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("abrarbouslahi100@gmail.com");
            message.setTo(toEmail);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
            System.out.println("Mail sent successfully to: " + toEmail);
        } catch (Exception e) {
            System.out.println("Failed to send email to: " + toEmail);
            e.printStackTrace();
        }
    }


}

