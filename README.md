# clone the repo
```bash
git clone git@github.com:kaushalluffa/instock-sveltekit.git
```
## installing dependencies
```bash
npm install
```
## setup https://appwrite.io, if you don't have an account sign up and then follow these steps:

1. Create Project <br/>
[![Screenshot-2024-06-10-at-20-11-36.png](https://i.postimg.cc/9MdprL2F/Screenshot-2024-06-10-at-20-11-36.png)](https://postimg.cc/phd8SYyg)

2. Enter project name
3. Select Region and create
4. It should already open the project but if not then open it.
5. Then you will see following <br/>
[![Screenshot-2024-06-10-at-20-12-08.png](https://i.postimg.cc/V6Qgf33V/Screenshot-2024-06-10-at-20-12-08.png)](https://postimg.cc/mcjCV6ZY)
6. Select Web
7. Enter your web app name I used same as the project and put localhost in the hostname you can update it later when u deploy it.
8. Our project already have the optional steps done so you can just click on Skip optional step.
9. You will see something like this <br/>
[![Screenshot-2024-06-10-at-20-12-30.png](https://i.postimg.cc/qvFQYtQ0/Screenshot-2024-06-10-at-20-12-30.png)](https://postimg.cc/fVxxSR6g)
10. Click on Auth option in left menu.
11. Everything will be toggled on but make sure it looks like this because this project only supports one option for now. <br/>
[![Screenshot-2024-06-10-at-20-12-56.png](https://i.postimg.cc/ZqyjhTDN/Screenshot-2024-06-10-at-20-12-56.png)](https://postimg.cc/WDT0GPVp)
12. There are more things you can do in security option in Auth but you can explore that its not need for this project.
13. Now click on Databases from left menu <br/>
[![Screenshot-2024-06-10-at-20-13-11.png](https://i.postimg.cc/fRyBB7cB/Screenshot-2024-06-10-at-20-13-11.png)](https://postimg.cc/PCGWqwFw)
14. Click Create Database and name it whatever you like because we only care about the database id.
15. You will see this and you can start creating collections. Collections are basically tables (if you are already aware of what collections are then good). Again you can name whatever you want because we only care about the id. <br/>
[![Screenshot-2024-06-10-at-20-13-37.png](https://i.postimg.cc/HspS71VG/Screenshot-2024-06-10-at-20-13-37.png)](https://postimg.cc/SjvLw56V)
16. We need three collections for this project i have setup these three with these names:
```bash
categories
inventories
warehouses
```
17. Inside the collection you will need to create attributes <br/>
[![Screenshot-2024-06-10-at-20-13-58.png](https://i.postimg.cc/wT0wX4m1/Screenshot-2024-06-10-at-20-13-58.png)](https://postimg.cc/Vd091R4w)
18. But before that we need update permissions for collections that we can do by going into collection settings <br/>
[![Screenshot-2024-06-10-at-20-14-14.png](https://i.postimg.cc/BbCMwM7w/Screenshot-2024-06-10-at-20-14-14.png)](https://postimg.cc/ZvC8WFSr)
19. <b>Make sure you do this for all of your collections otherwise you will see errors.</b> Then scroll down and then in permissions section click on + button and you wil see this popup from which you should select All users. What that will do is all the users that are signed up with appwrite.io auth system will be able to access this data. <br/>
[![Screenshot-2024-06-10-at-20-14-24.png](https://i.postimg.cc/wx5fvjxc/Screenshot-2024-06-10-at-20-14-24.png)](https://postimg.cc/Hjx4vHyV)
20. And it should look like this and then click on Update. <br/>
[![Screenshot-2024-06-10-at-20-14-34.png](https://i.postimg.cc/QCDfbRmT/Screenshot-2024-06-10-at-20-14-34.png)](https://postimg.cc/G8MP3gZL)
21. See the following screenshots to create attributes for each collections:
    1.  First create the <b>Categories</b>: <br/>
[![Screenshot-2024-06-10-at-20-34-05.png](https://i.postimg.cc/MKCz24d8/Screenshot-2024-06-10-at-20-34-05.png)](https://postimg.cc/w7QCDwCW)
    1. Then create the <b>Inventories</b> but skip the warehouse and category relationship field you see in the screenshot we will set that up in later steps.:<br/>
[![Screenshot-2024-06-11-at-09-24-25.png](https://i.postimg.cc/Fs8K1pvB/Screenshot-2024-06-11-at-09-24-25.png)](https://postimg.cc/RN1mDcN7)
    1. Then create the <b>Warehouse</b> but skip the inventories relationship field :<br/>
[![Screenshot-2024-06-10-at-20-39-58.png](https://i.postimg.cc/YqHhQvBF/Screenshot-2024-06-10-at-20-39-58.png)](https://postimg.cc/9zLmhFMX)
1.  Now lets setup those relations within collections. 
    ### Warehouse Collection
    1. So for that you will scroll down and select Relationship option when you click on Create Attribute:<br/>
[![Screenshot-2024-06-10-at-20-41-14.png](https://i.postimg.cc/7hLtRxpn/Screenshot-2024-06-10-at-20-41-14.png)](https://postimg.cc/62Dh2N68)
    1. You will see this modal:<br/>
[![Screenshot-2024-06-10-at-20-43-06.png](https://i.postimg.cc/ZRXjwrx4/Screenshot-2024-06-10-at-20-43-06.png)](https://postimg.cc/9RtGMwkn)
    1. Choose Two way Relationship radio
    2. Choose inventories from Related Collection dropdown.
    3. Choose One to Many relation from Relation dropdown.
    4. Enter warehouses as Attributes Key input
    5. Choose Cascade - delete all related document from On deleting a document dropdown.
    6. And create it. This will create a relation between warehouse collection to inventory collection means a warehouse can have many inventories linked to it.
    7. You will see in the <b>Inventory</b> collection there is already a relationship created with name <b>warehouses</b> like this:<br/>
[![Screenshot-2024-06-11-at-21-44-30.png](https://i.postimg.cc/QNbp3N2b/Screenshot-2024-06-11-at-21-44-30.png)](https://postimg.cc/V5JS9wLr)

   ### Inventories Collection
    1. So again choose the relationship option in create attribute dropdown.
    2. In the modal choose One way relationship radio.
    3. Choose <b>Categories</b> from Related Collection dropdown.
    4. Enter attribute key <b>category</b>. Just a warning its misspelled as well. At the time of writing this its not fixed but it will be fixed asap here, in db, and the code too.
    5. Choose Many to One option from Relation dropdown.
    6. Choose Cascade - delete all related documents option from On Deleting a document.
    7. And create it. This will create a relation between categories collection to inventory collection, means every inventory will have a category linked to it.
1.  Let's setup the api key. Go to overview of your project on appwrite.io console and scroll down to this:<br/>
[![Screenshot-2024-06-10-at-20-59-01.png](https://i.postimg.cc/Hs1zxrbK/Screenshot-2024-06-10-at-20-59-01.png)](https://postimg.cc/CdJkrLPH)
1.  The click on Api Keys. And click on Create Api Key.
2.  Enter the name for your key and we don't care about that we actually care about the generated key so enter whatever you want.
3.  I have setup expiration in my setup for 1 year but its up to you you can set what you like.
4.  Make sure to select all scopes by clicking on Select All<br/>
[![Screenshot-2024-06-10-at-21-01-30.png](https://i.postimg.cc/SxJHLXtr/Screenshot-2024-06-10-at-21-01-30.png)](https://postimg.cc/Wdc9T4VF)
1.  And click Create.
## add envs and get these values from the appwrite.io console. the link i added is fine because its the same one as i have here
```bash
PRIVATE_APP_WRITE_PROJECT_ID=
PRIVATE_APP_WRITE_API_KEY=
PRIVATE_APP_WRITE_DATABASE_ID=
PRIVATE_APP_WRITE_CATEGORIES_COLLECTION_ID=
PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID=
PRIVATE_APP_WRITE_INVENTORIES_COLLECTION_ID=
PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
PUBLIC_APPWRITE_PROJECT_ID=
```
### Now run the app
```bash
npm run dev
```
### Go to /signup route and signup 
### You won't see any data as there is nothing in the database right now. But you can start by adding a warehouse. All fields are required in that form.
### You might see its not redirecting you to the correct page which i am working on fixing but if you see in your cookies for localhost instock_sveltekit_session then it should be good and you can try stopping the server and starting it again it should redirect u to home page automatically as the session exists in cookies