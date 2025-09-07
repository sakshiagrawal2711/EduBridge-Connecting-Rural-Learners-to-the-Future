package com.edubridge.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String className;  // e.g., "Class 10"
    private String type;       // "PDF" or "VIDEO"
    private String fileUrl;    // S3 file link
    private String uploadedBy; // Mentor username
}
