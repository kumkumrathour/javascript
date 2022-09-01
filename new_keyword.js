function create(firstName,lastName ,age){
            const user ={};
            user.firstName =firstName;
            user.lastName = lastName;
            user.sing =userMethod.sing;
            // user.email = email;
            user.age =age;
            user.about = userMethod.about;
            user.is18 = userMethod.is18;   
            return user;
        }
        const user1 = create('kumkum','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
        const user2 = create('priya didi','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
        const user3 = create('my lovely mom','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
        console.log(user1.is18());
        console.log(user3.about());