package com.edubridge.backend.controller;

import com.edubridge.backend.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;

import java.io.IOException;

@RestController
@RequestMapping("/api/s3")
public class S3Controller {

    @Autowired
    private S3Service s3Service;

    // ✅ Upload
    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file) throws IOException {
        return s3Service.uploadFile(file);
    }

    // ✅ Download
    @GetMapping("/download/{filename}")
    public ResponseEntity<byte[]> download(@PathVariable String filename) throws IOException {
        ResponseInputStream<GetObjectResponse> s3Object = s3Service.downloadFile(filename);

        byte[] content = s3Object.readAllBytes();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(content);
    }

    // ✅ Delete
    @DeleteMapping("/delete/{filename}")
    public String delete(@PathVariable String filename) {
        return s3Service.deleteFile(filename);
    }

    // ✅ View (returns a pre-signed URL to open file directly in browser)
    @GetMapping("/view/{filename}")
    public String view(@PathVariable String filename) {
        return s3Service.getFileUrl(filename);
    }

}
