<?php
    $randomNames = [ 'Oakley Sagar', 'Tristan Kent', 'Asher Stanford', 'Dareau Stampes',
                    'Norm Whitley', 'Cyrillus Milton', 'Jarvis Thackeray', 'Anselme Clark',
                    'Leonce Garfield', 'Heimo Padley', 'Hildemar Sutton', 'Merry Nash',
                    'Hollie Davenport', 'Maura Deighton', 'Ainsley Smith', 'Tokessa Twynam',
                    'Cierra Cromwell', 'Veneta Oldham', 'Damia Darby', 'Katherine Hayes'];
    for ($i=0; $i < count($randomNames); $i++) {
        $employee[] = ['id' => rand(0, 100),
                       'name' => $randomNames[$i]];
    }
?>

<!DOCTYPE HTML>
<head>
    <meta charset='UTF-8'>
    <link rel="stylesheet" href="CSS/style.css" type="text/css" />
</head>

<html>
    <body>
        <table border=1 width=100%>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            
            <?php
                foreach ($employee as $k => $v) : ?>
                    <tr <?= "class = 'row" . $k%7 . "'" ?> >
                        <td><?=$v['id'] ?></td>
                        <td><?=$v['name'] ?></td>
                    </tr>
                <?php endforeach;
                unset($v);
            ?>
            
        </table>
    </body>
</html>