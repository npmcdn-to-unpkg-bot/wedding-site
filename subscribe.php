<?php
$action = $_POST["action"];
$email = $_POST["email"];
$fname = $_POST["fname"];
$wedding_rsvp = $_POST["wedding_rsvp"];
$bbq_rsvp = $_POST["bbq_rsvp"];
$interest = $_POST["interest"];
$debug = isset($_POST["debug"])?$_POST["debug"]:0;
$apikey = 'b97f486e01bc3af6cb7e4a4e623f2796-us13';
$listid = $_POST["listID"];
$server = 'us13.';
if ($debug) {
    echo "*Robot voice* : Bleep bleep. Debugging is on master. <br><br>";
}
if (!isset($email)) {
    echo "*Robot voice*: No email master, I don't know what to do now. <br><br>";
}
switch($action) {
    case "subscribe":
        if ($debug) {
            echo "*Robot voice : Starting subscribe sir <br><br>";
        }
        mc_subscribe($email, $fname, $wedding_rsvp, $bbq_rsvp, $debug, $apikey, $listid, $server);
        if ($debug) {
            echo "*Robot voice* : Function didn't complete for some reason.<br><br>";
        }
        break;
    default:
        echo "*JRobot voice* : Your action is not valid master.<br><br>";
        break;
}
function mc_subscribe($email, $fname, $wedding_rsvp, $bbq_rsvp, $debug, $apikey, $listid, $server) {
    $data = array(
        'email_address' => $email,
        'status'        => 'subscribed',
        'merge_fields'  => array(
            'FNAME' => $fname,
            'MMERGE4' => $wedding_rsvp,
            'MMERGE2' => $bbq_rsvp
        )
    );
    $json_data = json_encode($data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://'.$server.'api.mailchimp.com/3.0/lists/'.$listid.'/members/');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_USERPWD, "USR:6cbcb3af8340ec1f771cdfc45ee06133-us13");
    curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/3.0');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    $result = curl_exec($ch);
    if ($debug) {
        var_dump(curl_getinfo($ch));
        die('<br><br>*Creepy etheral voice* : Mailchimp executed subscribe');
    }
    die();
};


?>