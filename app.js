const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const returnVal = {}

function mean(nums){
    let sum=0;
    for (x in nums) {
        sum+=x
    }
    let val = sum/nums.length
    return val
}

function median(nums){
    let i = nums.length/2
    return nums[i]
}

function mode(nums) {
    let arr = []
    for (let x in nums) {
        for (let i=0; i<nums.length; i++) {
            if (x == nums[i]) {
                arr.push(x)
            }
        }
    }
    return arr[0];
}

app.get('/', (req, res) => {
    return res.send('HOMEPAGE')
})

app.get('/mean',  (req, res) => {
    for (let num in req.query) {
        if (typeof num == 'string ' || num instanceof String) {
            res.status(400).json({msg: `${num} is not A NUMBER`})
        } else if (num == undefined){
            res.status(400).json({msg: `WE NEED NUMBERS TO MAKE THIS WORK`})
        }
    }

    let obj = {}
    obj['operation'] = 'mean'
    obj['value'] = mean(req.query)
    res.send(obj)
})

app.get('/median',  (req, res) => {
    for (let num in req.query) {
        if (typeof num == 'string ' || num instanceof String) {
            res.status(400).json({msg: `${num} is not A NUMBER`})
        } else if (num == undefined){
            res.status(400).json({msg: `WE NEED NUMBERS TO MAKE THIS WORK`})
        }
    }

    let obj = {}
    obj['operation'] = 'median'
    obj['value'] = median(req.query)
    res.send(obj)
})

app.get('/mode',  (req, res) => {
    for (let num in req.query) {
        if (typeof num == 'string ' || num instanceof String) {
            res.status(400).json({msg: `${num} is not A NUMBER`})
        } else if (num == undefined){
            res.status(400).json({msg: `WE NEED NUMBERS TO MAKE THIS WORK`})
        }
    }

    let obj = {}
    obj['operation'] = 'mode'
    obj['value'] = mode(req.query)
    res.send(obj)
})

app.listen(3000, function() {
    console.log('App on port 3000')
});