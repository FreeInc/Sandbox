export const regexpPatterns = {

  // pattern for EMAIL field
  /* RULES: need clarify and change pattern
  /*
  /*
  /*
   */
  email: `^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}`,

  // pattern for PASSWORD field
  /* RULES:
  /* - includes at least one capital letter
  /* - includes at least one number
  /* - should be 6-12 characters long
   */
  password: `^(?=.*?[A-Z])(?=.*?[0-9]).{6,12}$`
};
