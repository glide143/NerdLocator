<?php

$json2echo=array(
                      "speech"=> "",
                      "messages"=> [array(
                                       "title"=> 'Oblivion',
                                       "subtitle"=> 'Oblivion is a SciFi film.',
                                       "buttons"=> [ array(
                                                      "text"=> "view film",
                                                      "postback"=>"https://www.moovrika.com/m/3520"
                                                  ),
                                           array(
                                                      "text"=> "Ask something else",
                                                      "postback"=>"I want to ask something else"
                                                  )
                                            ]
                                          ,
                                        "type"=> 1
                                   )]
                        );



      header('Content-Type: application/json');
      echo json_encode($json2echo, JSON_UNESCAPED_SLASHES);

?>
