<!DOCTYPE html>
<html lang="es">
    <body>
        <?php
        //FUNCIÓN DE CONEXIÓN CON LA BASE DE DATOS SQLITE
    	function conectaDb(){
    	    try {
    		$db = new PDO("sqlite:./bbdd_uya.sqlite");
    		return($db);
    	    } catch (PDOException $e) {
    			print "<p>Error: No puede conectarse con la base de datos.</p>\n";
    	    }
    	}

    		$db = conectaDb();
            echo "Esta conectando"
    		$dbTabla = "T_usuarios";
    		$Nombre = $_POST['Nombre'];

    		$consulta = "SELECT * FROM $dbTabla where nombre = '$Nombre'";
    		$result = $db->query($consulta);

    		if (!$result) {
    		    print "<p>Error en la consulta.</p>\n";
    		} else {
    		    foreach ($result as $valor) {
    			print "<p>Nombre: $valor[nombre]</p>\n";
    		    }
    		}

    	$db = NULL;
    	?>
    </body>
</html>
