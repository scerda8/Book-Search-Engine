const typeDefs=`
type User{
_id:ID
username:String
email:String
savedBooks:[Book]
bookCount:Int

}
type Book{
bookId:ID
authors:[String]
description:String
image:String
link:String
title:String

}
type Auth{
token:ID
user:User

}
input BookInput{
bookId:ID
authors:[String]
description:String
image:String
link:String
title:String

}
type Query{
me:User
}
type Mutation{
login(email:String,password:String):Auth
addUser(email:String,username:String,password:String):Auth
saveBook(bookData:BookInput):User
removeBook(bookId:ID):User
}

`
module.exports=typeDefs;