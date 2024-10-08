package com.openclassrooms.mddapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String title;

    @NotBlank
    private String content;

    @NotNull
    private UserDTO author;

    private List<CommentDTO> comments;

    @NotNull
    private TopicDTO topic;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
