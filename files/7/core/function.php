<?php

function connectToDb()
{
    $conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function fInit()
{
    $conn = connectToDb();
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM todo";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row['id']] = $row;
        }
    } else {
        echo "0";
    }
    mysqli_close($conn);
    echo json_encode($out);
}

function fCreate() {
    if (isset($_POST['head']) AND $_POST['head']!='' AND isset($_POST['body']) AND $_POST['body']!='') {
        $head = trim($_POST['head']);
        $body = trim($_POST['body']);
        $conn = connectToDb();
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $sql = "INSERT INTO todo (head, body) VALUES ('$head', '$body')";
        if (mysqli_query($conn, $sql)) {
            echo "1";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
    else {
        echo '0';
    }
}
function fDelete() {
    if (isset($_POST['id']) AND $_POST['id']!='' ) {
        $id = trim($_POST['head']);
        $conn = connectToDb();
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $sql = "DELETE FROM MyGuests WHERE id='$id'";
        if (mysqli_query($conn, $sql)) {
            echo "1";
        } else {
            echo "Error deleting record: " . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
    else {
        echo '0';
    }
}
