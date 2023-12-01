export const SERIALIZED_METADATA = {
  '@inhanbyeol/nestjs-swagger': {
    models: [
      [
        import('./create-user-dto.fixture'),
        {
          CreateUserDto: {
            active: {
              type: () => Boolean
            },
            role: {
              type: () => String
            }
          }
        }
      ]
    ]
  }
};
