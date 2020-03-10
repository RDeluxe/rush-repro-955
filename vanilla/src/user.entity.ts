import { Entity, PrimaryKey } from 'mikro-orm'

@Entity()
export class UserEntity {
  @PrimaryKey()
  id!: number
}
