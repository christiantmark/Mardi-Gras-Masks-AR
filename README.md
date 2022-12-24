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
![Mask 1](https://user-images.githubusercontent.com/70560542/209451298-383a5428-7a62-424f-8a45-adbd783c27ec.jpeg)
![Mask 2](https://user-images.githubusercontent.com/70560542/209451300-32fd0869-d851-4c65-a2c7-2089b5b53749.jpeg)
![Mask 3](https://user-images.githubusercontent.com/70560542/209451301-cb8323b6-84e8-43cc-a0ce-adc8a5548b0a.jpeg)
