import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CreateOrUpdateCountry {
  @Field()
  code!: string;

  @Field()
  countryName!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: string;
}