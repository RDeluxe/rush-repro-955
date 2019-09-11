export class UserCreationDTO {
  @IsEmail() public email: string
  @IsString() public password: string
}
