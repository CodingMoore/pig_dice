| Description Roll();

Test: "It will generate a random number as output between 1-6"
Expect: ((p1Roll).click).toEqual("1-6");

Test: "It will store output number as element in array1"
Expect: ((p1Roll).click).toEqual([3, 2, 5]);

Test: "It will push the sum of elements in array1 to subtotal"
Expect: ((p1Roll).click).toEqual(array1 = [3, 2, 5]) subtotal = "10"

Test: "It will add the subtotal to total"
Expect ((p1Roll).click).toEqual(total = subtotal + total);

Test: "It will change subtotal to an empty array when current roll is equal to 1"
Expect: (((p1Roll).click)=1)).toEqual(array1=[]);

| Description Hold();

Test: "It will add total to score"
Expect: ((p1Hold).click).toEqual(score = score + total);

Test: "It will hide buttons for player one after clicking hold, show player two buttons and vice versa"
Expect: ((p1Hold).click).toEqual(show p2Roll and P2Hold buttons) and (hide p1Roll and p1Hold buttons);