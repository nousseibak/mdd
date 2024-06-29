package com.openclassrooms.mddapi.dto;

import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"posts", "comments", "subscriptions"}) // Exclude relationships to avoid recursion
public class UserDTO {
    private Long id;

    @NotBlank
    @Email
    @Size(max = 255)
    private String email;

    @NotBlank
    @Size(max = 255)
    private String username;

    @NotBlank
    @Size(min = 8, max = 40)
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+=]).{8,}$",
            message = "Le mot de passe doit contenir au moins 8 caractères, avec au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial.")
    private String password;

    private boolean admin;

    //private List<Post> posts;

    //private List<CommentDTO> comments;
    //private List<TopicDTO> subscriptions;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
