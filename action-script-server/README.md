Pre Requirement
===

1. server for action server target linux system
2. Provide login by ssh key example on rhel https://www.redhat.com/sysadmin/configure-ssh-keygen
3. git


How to Use ?
=======

1. Clone the git repo https://github.com/viyancs/turbonomic.git on action server target under directory /home/{user}/Documents/scripts
```
cd /home/{user}/Documents
git clone https://github.com/viyancs/turbonomic.git scripts
```
2. cd into directory scripts and copy ansible.sh.sample to ansible.sh
```
cd /home/{user}/Documents/scripts
mv ansible.sh.sample ansible.sh

```
modify all variable that you needed such LOG_FILE location, TOWER_HOST, TOWER_USERNAME, TOWER_PASSWORD and WORKFLOW_ID

```
vi ansible.sh
```

3. modify ansible.json change value <b>scriptPath</b> property to your directory ansible.sh location
```
vi ansible.json
```

4. Testing the script by running ansible.sh
```
chmod +x ansible.sh
./ansible.sh
```
this command gonna create ansible.log file and executing ansible tower workflow by worflow id, if this success workflow id on ansible tower gonna be running




