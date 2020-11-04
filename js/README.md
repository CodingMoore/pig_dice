| Description Roll();

Test: "It will generate a random number as output between 1-6"
Expect: ((p1Roll).click).toEqual("1-6");

Test: "It will store output number as element in array1"
Expect: ((p1Roll).click).toEqual([3, 2, 5]);

Test: "It will push the sum of elements in array1 to subtotal"
Expect: ((p1Roll).click).toEqual(array1 = [3, 2, 5]) subtotal = "10"

Test: "It will change subtotal to an empty array when current roll is equal to 1"
Expect: (((p1Roll).click)=1)).toEqual(array1=[]);

| Description Hold();

Test: "It will add subtotal to total"
Expect: ((p1Hold).click).toEqual(total = subtotal + total);

Test: "It will change subtotal to an empty array"
Expect: ((p1Hold).click).toEqual(subtotal = []);