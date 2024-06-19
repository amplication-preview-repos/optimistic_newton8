/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TeamMemberWhereUniqueInput } from "../../teamMember/base/TeamMemberWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TeamMemberCreateNestedManyWithoutTeamsInput {
  @Field(() => [TeamMemberWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamMemberWhereUniqueInput],
  })
  connect?: Array<TeamMemberWhereUniqueInput>;
}

export { TeamMemberCreateNestedManyWithoutTeamsInput as TeamMemberCreateNestedManyWithoutTeamsInput };