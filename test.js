count := 0; x := 3;
WHILE (count < 3) DO
    count := count + 1;
    y := (1 + 2 * count) % 3;
    SWITCH (y) DO
        default : 
        case 0 : x := x-1; BREAK;
        case 1 : x := x+5;
    END_SWITCH
END_WHILE



count = 2
y = 2
x = 2

count = 3 
y = 1
x = 7


