package com.openclassrooms.mddapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long id;

    @NotBlank
    private String content;

    @NotNull
    private UserDTO author;

    @NotNull
    private Long postId;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
