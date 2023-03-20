#StackWebhook
====
1. nodejs:latest https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
2. expressjs:^4.18.2
3. git ``` sudo apt install git ```
4. npm ``` sudo apt install npm ```

How to Run 
====
```
nohup node index.js &
```

How to fetch the log
====
```
tail -f nohup.out
```

how to test
====
```
    curl -X POST http://{{ip_address}}:3000/webhook -H 'Content-Type: application/json' -d '{"message": "Hello, world!"}'

```