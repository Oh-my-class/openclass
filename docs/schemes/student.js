{
  $and: [
    {
      email: {
        $regex: '@'
      }
    }
  ],
  $jsonSchema: {
    required: [
      '_id',
      'email',
      'password',
      'firstname',
      'lastname'
    ],
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      firstname: {
        type: 'string'
      },
      lastname: {
        type: 'string'
      }
    }
  }
}