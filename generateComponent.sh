echo "- Component Generator -"

while true; do
  echo "Enter name of component: "
  read component_name
  cd "./imports/ui" && mkdir "$component_name"
  cd "$component_name"
  touch "$component_name.html" && touch "$component_name.js"
  cd ../../..
  pwd
  while true; do
  	read -p "Would you like to install another component? " yn
  	case $yn in
    	[Yy]* ) break;;
    	[Nn]* ) break;;
    	* ) echo "Please answer yes or no!"; continue;;
  	esac
  done
done
