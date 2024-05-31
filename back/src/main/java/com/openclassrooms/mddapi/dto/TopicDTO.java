package com.openclassrooms.mddapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TopicDTO {
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String name;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
