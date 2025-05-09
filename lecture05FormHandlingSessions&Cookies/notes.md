# Form Handling and Working With The Form
- Handle backend process of forms and making sure the data coming from any frontend library, framework, templating engines, we still handle it at the backend

## Cookie

- hum log kuch bhi data frontend par browser par rakh saktey(like string) hein aur jab bhi ap kuch bhi request backend par krogey wo frontend par saved data automatically backend par challa jayega

==> You ask something ==> server say who are you ==> You login => server gives you result and some string ==> that string saved on chrome/frontend ==> next time no need to login ==> when you ask something this string will be attached at end of the request

==> Cookie means sesa data jo ap k browser/frontend pey save hae
==> This type of data mainly used in authentication

## Session
login krne sey logout krney tak aik session hota hae


#### Blob
It is stream ==> data in unreadable formate ==>
sab kuch ==> browser ki information

humney bheja tha plain text but server ko mila blob which is not direct readable . ab isko handle krna padegaa k hum us blob ko direct readable kr sakein 

- blob is not correct way to explain => we say blob when data is in binary form