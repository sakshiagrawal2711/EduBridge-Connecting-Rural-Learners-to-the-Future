package com.edubridge.backend.service;

import com.edubridge.backend.model.StudyMaterial;
import com.edubridge.backend.repository.StudyMaterialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyMaterialService {

    private final StudyMaterialRepository repository;

    public StudyMaterialService(StudyMaterialRepository repository) {
        this.repository = repository;
    }

    public List<StudyMaterial> getAll() {
        return repository.findAll();
    }

    public StudyMaterial addMaterial(StudyMaterial material) {
        return repository.save(material);
    }

    public void deleteMaterial(Long id) {
        repository.deleteById(id);
    }
}
