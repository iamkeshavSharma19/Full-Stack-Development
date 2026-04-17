//&Go to npmjs.com (npm Home, some people also say it as npm registery,people have uploaded many tools like => express, axios, nodemon, mongoose, zod, react, react-dom, that's why it is known as registery)

//?Go to npmgraph.js to see the list of all dependencies and their transitive dependencies.

//& npm install <package_name1> <package_name2> for installing multiple packages..

//~the person who has made axios, he has used other packages also for making the axios.These are also known as Transitive Dependencies..

//& dev-dependencies are ==> vite, jest, typescript and esLint....

//&for installing any package globally === use npm install -g typescript.global folders go inside CDrive,it do'not go inside any local folder. CDrive === users === AppData === Roaming === npm === node_modules (global),this is where the global packages are installed.

//~We can also install the packages on the temporary basis === it will run very quickly and it will be removed also very quickly.Instead of Roaming go to local === npm_cache === npx.Rest behind path same.

//? npx nodemon === temporary package === npx nodemon script.js.npx says whether the create-vite is present or not.create-vite is a scaffholding CLI(pehle se hi sab kuch pre-built bana ke de dega ==> It automatically generates the basic folder structure) package,it checks in local then goes to global,if not present then it downloads that package inside the npx folder.Even before entering enter ==> a hash empty folder will be created.so create-vite folder will create a basic project folder in the local but where does this create-vite package folder will come ??? It will go inside the _npx.even before pressing enter,a empty hash folder will be created.

//&scaffholding package === which gives me a basic folder structure is called scaffholding package.create-vite@latest is a scaffholding package.but scaffholding package will be itself installed in the temporary location.

//& npx create-vite@latest .

//& npx create-vite@latest === first find this package in the local and global,if you do'not find install in the temporary location.

//& npm create-vite@latest === "npm create" becomes npx and vite@ means create-vite@latest,behind the scenes it uses the above command only.

//& npx create-vite@latest === without dot (.) so it ask to create a new folder inside my local folder,and in that folder it will again ask me the project name. for avoiding use dot === npx create-vite@latest.dot means install the project in my current local folder only.

//& npx create-vite@latest . === It asks the package_name:ziggy,in package.json what should be the package name, dot install the project in the current folder only.

//~npx create-vite@latest . --template react === Advanced way of installing the React.

//?Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
