package tn.esprit.spring.service;

public interface MailService {

    public void sendEmail(String toEmail, String subject, String body);
}
