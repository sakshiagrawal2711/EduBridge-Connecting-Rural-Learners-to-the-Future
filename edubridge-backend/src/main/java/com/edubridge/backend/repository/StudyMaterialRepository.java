package com.edubridge.backend.repository;

import com.edubridge.backend.model.StudyMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyMaterialRepository extends JpaRepository<StudyMaterial, Long> {
}
