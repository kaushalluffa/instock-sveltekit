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
![Screenshot-2024-06-10-at-20-11-36.png](https://postimg.cc/phd8SYyg)

2. Enter project name
3. Select Region and create
4. It should already open the project but if not then open it.
5. Then you will see following <br/>
![Screenshot-2024-06-10-at-20-12-08.png](https://postimg.cc/mcjCV6ZY)
6. Select Web
7. Enter your web app name I used same as the project and put localhost in the hostname you can update it later when u deploy it.
8. Our project already have the optional steps done so you can just click on Skip optional step.
9. You will see something like this <br/>
![Screenshot-2024-06-10-at-20-12-30.png](https://postimg.cc/fVxxSR6g)
10. Click on Auth option in left menu.
11. Everything will be toggled on but make sure it looks like this because this project only supports one option for now. <br/>
![Screenshot-2024-06-10-at-20-12-56.png](https://postimg.cc/WDT0GPVp)
12. There are more things you can do in security option in Auth but you can explore that its not need for this project.
13. Now click on Databases from left menu <br/>
![Screenshot-2024-06-10-at-20-13-11.png](https://postimg.cc/PCGWqwFw)
14. Click Create Database and name it whatever you like because we only care about the database id.
15. You will see this and you can start creating collections. Collections are basically tables (if you are already aware of what collections are then good). Again you can name whatever you want because we only care about the id. <br/>
![Screenshot-2024-06-10-at-20-13-37.png](https://postimg.cc/SjvLw56V)
16. We need three collections for this project i have setup these three with these names:
```bash
categories
inventories
warehouses
```
17. Inside the collection you will need to create attributes <br/>
![Screenshot-2024-06-10-at-20-13-58.png](https://postimg.cc/Vd091R4w)
18. But before that we need update permissions for collections that we can do by going into collection settings <br/>
![Screenshot-2024-06-10-at-20-14-14.png](https://postimg.cc/ZvC8WFSr)
19. <b>Make sure you do this for all of your collections otherwise you will see errors.</b> Then scroll down and then in permissions section click on + button and you wil see this popup from which you should select All users. What that will do is all the users that are signed up with appwrite.io auth system will be able to access this data. <br/>
![Screenshot-2024-06-10-at-20-14-24.png](https://postimg.cc/Hjx4vHyV)
20. And it should look like this and then click on Update. <br/>
![Screenshot-2024-06-10-at-20-14-34.png](https://postimg.cc/G8MP3gZL)
21. See the following screenshots to create attributes for each collections:
    1.  First create the <b>Categories</b>: <br/>
    ![Screenshot-2024-06-10-at-20-34-05.png](https://postimg.cc/w7QCDwCW)
    2. Then create the <b>Inventories</b> but skip the warehouse_id and category_id relationship field you see in the screenshot we will set that up in later steps. I accidentally typed it warehouse_id but its actually the full warehouse relation so it would make sense to just name it warehouse and same thing with category_id (its a hassle to fix all this 🥲):<br/>
    ![Screenshot-2024-06-10-at-20-38-43.png](https://postimg.cc/zytXFzsP)
    3. Then create the <b>Warehouse</b> but skip the inventories relationship field (and yes this one is correctly named):<br/>
    ![Screenshot-2024-06-10-at-20-39-58.png](https://postimg.cc/9zLmhFMX)
22. Now lets setup those relations within collections. 
    ### Warehouse Collection
    1. So for that you will scroll down and select Relationship option when you click on Create Attribute:<br/>
    ![Screenshot-2024-06-10-at-20-41-14.png](https://postimg.cc/62Dh2N68)
    2. You will see this modal:<br/>
    ![Screenshot-2024-06-10-at-20-43-06.png](https://postimg.cc/9RtGMwkn)
    3. Choose Two way Relationship radio
    4. Choose inventories from Related Collection dropdown.
    5. Choose Many to One relation from Relation dropdown.
    6. Enter warehouse_id as Attributes Key input
    7. Choose Cascade - delete all related document from On deleting a document dropdown.
    8. And create it. This will create a relation between warehouse collection to inventory collection means a warehouse can have many inventories linked to it.
    9. You will see in the <b>Inventory</b> collection there is already a relationship created with name <b>warehouse_id</b> like this:<br/>
    ![Screenshot-2024-06-10-at-20-50-38.png](https://postimg.cc/4YDpsRPy)
    ### Inventories Collection
    1. So again choose the relationship option in create attribute dropdown.
    2. In the modal choose One way relationship radio.
    3. Choose <b>Categories</b> from Related Collection dropdown.
    4. Enter attribute key <b>categoriy_id</b>. Just a warning its misspelled as well. At the time of writing this its not fixed but it will be fixed asap here, in db, and the code too.
    5. Choose Many to One option from Relation dropdown.
    6. Choose Cascade - delete all related documents option from On Deleting a document.
    7. And create it. This will create a relation between categories collection to inventory collection, means every inventory will have a category linked to it.
23. Let's setup the api key. Go to overview of your project on appwrite.io console and scroll down to this:<br/>
![Screenshot-2024-06-10-at-20-59-01.png](https://postimg.cc/CdJkrLPH)
24. The click on Api Keys. And click on Create Api Key.
25. Enter the name for your key and we don't care about that we actually care about the generated key so enter whatever you want.
26. I have setup expiration in my setup for 1 year but its up to you you can set what you like.
27. Make sure to select all scopes by clicking on Select All<br/>
![Screenshot-2024-06-10-at-21-01-30.png](https://postimg.cc/Wdc9T4VF)
28. And click Create.
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
