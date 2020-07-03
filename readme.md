## To run the project    
```docker-compose up```  

## atmoz/sftp settings
https://github.com/atmoz/sftp   
### To generate SSH keys
```ssh-keygen -t ed25519 -f ssh_host_ed25519_key < /dev/null```

```ssh-keygen -t rsa -b 4096 -f ssh_host_rsa_key < /dev/null```

### To access sftp 
```sftp -P 2222 foo@localhost```    
password is "pass"
  
