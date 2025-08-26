type LoginScreenParam =
{
  title : string
}
type SignUpParam = 
{
  title : string
  discription : string
}
type HomeScreenParam = 
{
  title :string
}
export type RootStackParamList =
{
  LoginScreen : LoginScreenParam,
  SignUp : SignUpParam,
  HomeScreen : HomeScreenParam,
}
