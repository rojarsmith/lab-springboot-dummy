module.exports ={
   "apps":[
      {
         "name":"lab-springboot-dummy",
         "script":"java",
         "args":[
            "-jar",
            "/home/dev/test/lab-springboot-dummy/lab-springboot-dummy.jar"
         ],
         "exec_interpreter":"",
         "exec_mode":"fork"
      }
   ],
   deploy: {
	 production:{
            // the user to login and rum pm2
            user: 'dev',
            // support deploying to multi host
            host: ['192.168.50.85'],
            // url of git repository
            repo: 'git@github.com:rojarsmith/lab-springboot-dummy.git',
            // branch to deply
            //ref: 'origin/master',
			//ref: 'tags/TAG1',
			ref: '79a9a955e5957ec2afb3806290617de327a5e851',
            // deploy path at server
            path: '/home/dev/test/lab-springboot-dummy',
			// Running after pm2 clone project at remote
			'post-setup': 'echo nothing to do at post-setup',
			// Running after deploying at remote
			'post-deploy': 'chmod +x gradlew;./gradlew build;find build/libs -name \'*.jar\' ! -name \'*plain.jar\' | xargs -i cp -f {} ../;rm -f ../lab-springboot-dummy.jar;find ../ -maxdepth 1 -name \'*.jar\' |  xargs -i mv {} ../lab-springboot-dummy.jar;pm2 startOrRestart ecosystem.config.js lab-springboot-dummy'
	 }  
   }
   
}
