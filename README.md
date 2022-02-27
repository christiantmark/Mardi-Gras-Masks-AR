A Mardi Gras Masquerade using FaceAR and echo3D! Which Mardi Gras mask will you get? 

# Register
Don't have an API key? Make sure to register for FREE at [echo3D](https://www.echo3d.co/).

# How to Use:
User shuffles between 3 masks by clicking the screen. Underneath the camera canvas is a reset button that will reset to the first mask.

# Setup:

* Go to [echo3D console](https://console.echo3d.co/#/pages/contentmanager) and click "Add to Cloud" in the upper-left hand corner. Search for models by typing in "mardi gras mask" and add 3 masks to your console.
* In the echo3D console, click the ^ arrow on the mask to open the metadata table and click the +Add Data button to add 2 parameters. For the first metadata set, select "scale" and enter "10". For the second metadata set, select "yAngle" and enter "-180". Do this for all three masks.
* Clone the Mardi-Gras-Masks-AR sample code.
* Open the sample code using VSCode.
* Locate to the index.html file and at line 46, enter your API key and entryID model. Input Mask 1's entry ID.
* Locate to the script.js file and at lines 3,4, and 5, enter your API key and entryID's for the 3 masks. Input Mask 1,2, and 3's entry ID's.
* Right click index.html and select Open with Live Server. If Live Server is not already installed, documentation to install it can be located [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* Locate to [ngrok.com](https://ngrok.com/) to setup an account and download the MacOSX ARM64 or Windows(32-Bit) file
* Follow the ngrok setup instructions [here](https://dashboard.ngrok.com/get-started/setup)
* Start up a HTTP tunnel. In the terminal, type in ./ngrok http (port number). Fill in the portnumber with the default port from Step 3 in the URL. 
* Next to forwarding, copy and paste the given https link (ex: https://8418-168-122-7-164.ngrok.io) and send to your phone.
* Open the link on your phone

# Learn more
Refer to our [documentation](https://docs.echo3d.co/) to learn more about how to use FaceAR and echo3D.

# Support
Feel free to reach out at support@echo3D.co or join our [support channel on Slack](https://echo3d.slack.com/ssb/redirect).

# Screenshot
![alt text](https://scontent-bos3-1.xx.fbcdn.net/v/t1.15752-9/p320x320/272787676_316056950536466_7611529968081835732_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mCSMOLqrGnkAX97lqSf&tn=EThAkjqMlTZqkViO&_nc_ht=scontent-bos3-1.xx&oh=03_AVInpgGRozmET0-Hxz2nnXBkXDk4_f6PtZnA20oLpRlDTw&oe=6228651A)
![alt text](https://scontent.xx.fbcdn.net/v/t1.15752-9/p320x320/273222093_1385376661977384_1792994701520626526_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=u3mXilkO2kcAX_Ws-tv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI4qAYNvhzO2BEL1KuaUUKF_MJT3Vo759FGavamo4Ds-g&oe=622A2CAD)
![alt text](https://scontent-bos3-1.xx.fbcdn.net/v/t1.15752-9/p320x320/272911723_1078332806292068_8373092482646728540_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=hthtJVYQhXwAX_o6O-Z&_nc_oc=AQlV3DjKm4dtEC9YPz7-Gflmrz035bfV2PF6iZiNXaeFFGXZC3KrVJonHkJkgxBysUU&tn=EThAkjqMlTZqkViO&_nc_ht=scontent-bos3-1.xx&oh=03_AVKLoub4IEIHg_q5u-OPWkKyooC0zbq0zNfkhLjw1jcC1g&oe=6225B75D)
