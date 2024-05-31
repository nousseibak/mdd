package com.openclassrooms.mddapi.payload.request;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignupRequest {
  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(min = 3, max = 255)
  private String username;

  @NotBlank
  @Size(min = 8)
  @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+=]).{8,}$",
          message = "Le mot de passe doit contenir au moins 8 caractères, avec au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial.")
  private String password;
}
