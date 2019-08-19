module.exports = {
    reactions: [
        { 
          "id" : ("5acc1eef734d1d55c318dfcd"), 
          "name" : "Smiley", 
          "identifier" : "smiley", 
          "source" : {
              "type" : "text", 
              "value" : "😀"
          }
      },
      { 
          "id" : ("5acc1f88734d1d55c318e051"), 
          "name" : "Cherries", 
          "identifier" : "cherries", 
          "source" : {
              "type" : "image", 
              "value" : "/assets/reactions/cherries.png"
          }
      },
      { 
          "id" : ("5acc1f34734d1d55c318e020"), 
          "name" : "Coin", 
          "identifier" : "coin", 
          "source" : {
              "type" : "image", 
              "value" : "/assets/reactions/coin.png"
          }
      },
      { 
          "id" : ("5acc1fa5734d1d55c318e069"), 
          "name" : "Controller", 
          "identifier" : "controller", 
          "source" : {
              "type" : "image", 
              "value" : "/assets/reactions/controller.png"
          }
      },
      { 
          "id" : ("5acc1fb9734d1d55c318e07e"), 
          "name" : "Trophy", 
          "identifier" : "trophy", 
          "source" : {
              "type" : "text", 
              "value" : "🏆"
          }
      },
      { 
          "id" : ("5acc1fc7734d1d55c318e083"), 
          "name" : "POW", 
          "identifier" : "pow", 
          "source" : {
              "type" : "image", 
              "value" : "/assets/reactions/pow.png"
          }
      },
      { 
          "id" : ("5b101600fb6fc07c033b50d9"), 
          "name" : "Bomb", 
          "identifier" : "bomb", 
          "source" : {
              "type" : "text", 
              "value" : "💣"
          }
      }
    ],
    matches: [
      { 
        "id" : ("5acba429734d1d55c31882fd"), 
        "identifier" : "BUESBBXW", 
        "start_time" : ("2018-07-25T22:30:00.000+0000"), 
        "end_time" : ("2018-07-29T22:52:55.803+0000"), 
        "is_open" : true, 
        "is_live" : false, 
        "video_url" : "", 
        "stream_source_url" : "wss://edge.cdn.wowza.com/live/_definst_/0P0p2QittQXphTTZ4RGt3VFZCQm15838/stream.ws", 
        "backup_stream_source_url" : "https://wowzaprod178-i.akamaihd.net/hls/live/677083/0P0p2QittQXphTTZ4RGt3VFZCQm15838/playlist.m3u8", 
        "viewers" : (0), 
        "max_viewers" : (0), 
        "name" : "Rocket League", 
        "details" : "1v1, 4 rounds", 
        "modifiers" : [
            {
                "name" : "Kid Goal", 
                "info" : "2 points"
            }, 
            {
                "name" : "Pro Goal", 
                "info" : "1 point"
            }, 
            {
                "name" : "Close Game (less than 10)", 
                "info" : "Kid +3 points"
            }
        ], 
        "game_name" : "Rocket League", 
        "game_type" : "head to head", 
        "game_image_url" : "/assets/games/rocket_league.jpg", 
        "game_platform" : "PC", 
        "players" : [
            {
                "name" : "Emagination", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/emagination_avatar.jpg", 
                "is_pro" : false, 
                "score" : (31), 
                "score_adjustment" : (526), 
                "score_multiplier" : (1)
            }, 
            {
                "name" : "SkullKid", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/skullkid_avatar.jpg", 
                "is_pro" : true, 
                "score" : (45), 
                "score_adjustment" : (114), 
                "score_multiplier" : (1)
            }
        ], 
        "reactions" : [
            {
                "identifier" : "cherries", 
                "count" : (0), 
                "points" : (9), 
                "is_locked" : true, 
                "unlock_trigger" : "", 
                "time_to_live" : (10), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/cherries.png"
                }, 
                "pendingPoints" : (0)
            }, 
            {
                "identifier" : "coin", 
                "count" : (35700), 
                "points" : (357), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.01, 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/coin.png"
                }
            }, 
            {
                "identifier" : "smiley", 
                "count" : (4317), 
                "points" : (86), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "😀"
                }
            }, 
            {
                "identifier" : "trophy", 
                "count" : (1247), 
                "points" : (36), 
                "is_locked" : false, 
                "unlock_trigger" : "final minute of each round", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.01, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "🏆"
                }
            }, 
            {
                "identifier" : "bomb", 
                "count" : (19), 
                "points" : (38), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : true, 
                "increment" : (2), 
                "adjustment" : (1), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "💣"
                }
            }, 
            {
                "identifier" : "pow", 
                "count" : (26498), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (500), 
                "adjustment" : (0), 
                "recipient" : "challenge", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/pow.png"
                }
            }, 
            {
                "identifier" : "pro", 
                "count" : (9500), 
                "points" : (114), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.004, 
                "recipient" : "pro", 
                "source" : {
                    "type" : "player", 
                    "value" : "pro"
                }
            }
        ]
    },
    { 
        "id" : ("5b58a8fefb6fc0105da1663b"), 
        "identifier" : "6GG83MS2", 
        "start_time" : ("2018-07-26T22:30:00.000+0000"), 
        "end_time" : ("2018-07-29T22:51:58.560+0000"), 
        "is_open" : true, 
        "is_live" : false, 
        "video_url" : "", 
        "stream_source_url" : "wss://edge.cdn.wowza.com/live/_definst_/0P0p2emJiOVFVRGF1b05ZdXFUU215645/stream.ws", 
        "backup_stream_source_url" : "https://wowzaprod178-i.akamaihd.net/hls/live/677083/0P0p2emJiOVFVRGF1b05ZdXFUU215645/playlist.m3u8", 
        "viewers" : (0), 
        "max_viewers" : (0), 
        "name" : "Rocket League", 
        "details" : "1v1, 4 rounds", 
        "modifiers" : [
            {
                "name" : "Kid Goal", 
                "info" : "2 points"
            }, 
            {
                "name" : "Pro Goal", 
                "info" : "1 point"
            }, 
            {
                "name" : "Close Game (less than 10)", 
                "info" : "Kid +3 points"
            }
        ], 
        "game_name" : "Rocket League", 
        "game_type" : "head to head", 
        "game_image_url" : "/assets/games/rocket_league.jpg", 
        "game_platform" : "PC", 
        "players" : [
            {
                "name" : "Emagination", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/emagination_avatar.jpg", 
                "is_pro" : false, 
                "score" : (26), 
                "score_adjustment" : (419), 
                "score_multiplier" : (1)
            }, 
            {
                "name" : "SkullKid", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/skullkid_avatar.jpg", 
                "is_pro" : true, 
                "score" : (43), 
                "score_adjustment" : (474), 
                "score_multiplier" : (1)
            }
        ], 
        "reactions" : [
            {
                "identifier" : "cherries", 
                "count" : (0), 
                "points" : (33), 
                "is_locked" : true, 
                "unlock_trigger" : "", 
                "time_to_live" : (10), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/cherries.png"
                }, 
                "pendingPoints" : (0)
            }, 
            {
                "identifier" : "coin", 
                "count" : (233153), 
                "points" : (23), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.0001, 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/coin.png"
                }
            }, 
            {
                "identifier" : "smiley", 
                "count" : (7977), 
                "points" : (159), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "😀"
                }
            }, 
            {
                "identifier" : "trophy", 
                "count" : (1867), 
                "points" : (54), 
                "is_locked" : false, 
                "unlock_trigger" : "final minute of each round", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.01, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "🏆"
                }
            }, 
            {
                "identifier" : "bomb", 
                "count" : (75), 
                "points" : (150), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : true, 
                "increment" : (2), 
                "adjustment" : (1), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "💣"
                }
            }, 
            {
                "identifier" : "pow", 
                "count" : (70105), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (5000), 
                "adjustment" : (0), 
                "recipient" : "challenge", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/pow.png"
                }
            }, 
            {
                "identifier" : "pro", 
                "count" : (31779), 
                "points" : (474), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.005, 
                "recipient" : "pro", 
                "source" : {
                    "type" : "player", 
                    "value" : "pro"
                }
            }
        ]
    },
    { 
        "id" : ("5b7b1c03e7179a1b43ce8b58"), 
        "identifier" : "NNGH821L", 
        "start_time" : ("2018-08-20T23:30:00.000+0000"), 
        "end_time" : ("2019-05-30T20:00:18.670+0000"), 
        "is_open" : true, 
        "is_live" : false, 
        "video_url" : "", 
        "stream_source_url" : "wss://edge.cdn.wowza.com/live/_definst_/0P0p2bDdKOWFtZzNxL2xuT2ltV0N5907/stream.ws", 
        "backup_stream_source_url" : "https://wowzaprod178-i.akamaihd.net/hls/live/677083/0P0p2bDdKOWFtZzNxL2xuT2ltV0N5907/playlist.m3u8", 
        "viewers" : (0), 
        "max_viewers" : (0), 
        "name" : "Rocket League", 
        "details" : "1v1, 4 rounds", 
        "modifiers" : [
            {
                "name" : "Kid Goal", 
                "info" : "2 points"
            }, 
            {
                "name" : "Pro Goal", 
                "info" : "1 point"
            }, 
            {
                "name" : "Close Game (less than 10)", 
                "info" : "Kid +3 points"
            }
        ], 
        "game_name" : "Rocket League", 
        "game_type" : "head to head", 
        "game_image_url" : "/assets/games/rocket_league.jpg", 
        "game_platform" : "PC", 
        "players" : [
            {
                "name" : "Kiddo", 
                "avatar" : "https://api.adorable.io/avatars/240/ghe", 
                "is_pro" : false, 
                "score" : (30), 
                "score_adjustment" : (170), 
                "score_multiplier" : (1)
            }, 
            {
                "name" : "SkullKid", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/skullkid_avatar.jpg", 
                "is_pro" : true, 
                "score" : (37), 
                "score_adjustment" : (147), 
                "score_multiplier" : (1)
            }
        ], 
        "reactions" : [
            {
                "identifier" : "cherries", 
                "count" : (4), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "", 
                "time_to_live" : (10), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/cherries.png"
                }, 
                "pendingPoints" : (0)
            }, 
            {
                "identifier" : "coin", 
                "count" : (9005), 
                "points" : (90), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.01, 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/coin.png"
                }
            }, 
            {
                "identifier" : "smiley", 
                "count" : (1705), 
                "points" : (34), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "😀"
                }
            }, 
            {
                "identifier" : "trophy", 
                "count" : (410), 
                "points" : (12), 
                "is_locked" : false, 
                "unlock_trigger" : "final minute of each round", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.01, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "🏆"
                }
            }, 
            {
                "identifier" : "bomb", 
                "count" : (17), 
                "points" : (34), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : true, 
                "increment" : (2), 
                "adjustment" : (1), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "💣"
                }
            }, 
            {
                "identifier" : "pow", 
                "count" : (5050), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (500), 
                "adjustment" : (0), 
                "recipient" : "challenge", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/pow.png"
                }
            }, 
            {
                "identifier" : "pro", 
                "count" : (12250), 
                "points" : (147), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.004, 
                "recipient" : "pro", 
                "source" : {
                    "type" : "player", 
                    "value" : "pro"
                }
            }
        ]
    },
    { 
        "id" : ("5cf04f9afb6fc01bf23f357e"), 
        "identifier" : "TIGER", 
        "start_time" : ("2019-05-30T17:50:00.000+0000"), 
        "end_time" : null, 
        "is_open" : true, 
        "is_live" : true, 
        "video_url" : "", 
        "stream_source_url" : "wss://edge.cdn.wowza.com/live/_definst_/0P0p2TGRsY0EvczVDSllrMGZ3Uk15841/stream.ws", 
        "backup_stream_source_url" : "https://wowzaprod204-i.akamaihd.net/hls/live/801880/0P0p2TGRsY0EvczVDSllrMGZ3Uk15841/playlist.m3u8", 
        "viewers" : (0), 
        "max_viewers" : (0), 
        "name" : "Rocket League", 
        "details" : "1v1, 4 rounds", 
        "modifiers" : [
            {
                "name" : "Kid Goal", 
                "info" : "2 points"
            }, 
            {
                "name" : "Pro Goal", 
                "info" : "1 point"
            }, 
            {
                "name" : "Close Game (less than 10)", 
                "info" : "Kid +3 points"
            }
        ], 
        "game_name" : "Rocket League", 
        "game_type" : "head to head", 
        "game_image_url" : "/assets/games/rocket_league.jpg", 
        "game_platform" : "PC", 
        "players" : [
            {
                "name" : "TIGER CUB", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/emagination_avatar.jpg", 
                "is_pro" : false, 
                "score" : (18), 
                "score_adjustment" : (7), 
                "score_multiplier" : (1)
            }, 
            {
                "name" : "KRONOVI", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/skullkid_avatar.jpg", 
                "is_pro" : true, 
                "score" : (18), 
                "score_adjustment" : (0), 
                "score_multiplier" : (1)
            }
        ], 
        "reactions" : [
            {
                "identifier" : "cherries", 
                "count" : (19), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "", 
                "time_to_live" : (10), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/cherries.png"
                }, 
                "pendingPoints" : (0)
            }, 
            {
                "identifier" : "coin", 
                "count" : (219), 
                "points" : (2), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.01, 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/coin.png"
                }
            }, 
            {
                "identifier" : "smiley", 
                "count" : (52), 
                "points" : (1), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "😀"
                }
            }, 
            {
                "identifier" : "trophy", 
                "count" : (33), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "final minute of each round", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.01, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "🏆"
                }
            }, 
            {
                "identifier" : "bomb", 
                "count" : (2), 
                "points" : (4), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : true, 
                "increment" : (2), 
                "adjustment" : (1), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "💣"
                }
            }, 
            {
                "identifier" : "pow", 
                "count" : (160), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (500), 
                "adjustment" : (0), 
                "recipient" : "challenge", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/pow.png"
                }
            }, 
            {
                "identifier" : "pro", 
                "count" : (34), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.004, 
                "recipient" : "pro", 
                "source" : {
                    "type" : "player", 
                    "value" : "pro"
                }
            }
        ]
    },
    { 
        "id" : ("5ceff034fb6fc01bf23eee13"), 
        "identifier" : "5.30.Test", 
        "start_time" : ("2019-05-30T11:06:00.000+0000"), 
        "end_time" : ("2019-05-31T14:21:31.631+0000"), 
        "is_open" : true, 
        "is_live" : false, 
        "video_url" : "", 
        "stream_source_url" : "wss://edge.cdn.wowza.com/live/_definst_/0P0p2MzY4Z3lERTlKbHQ4cFYvQ1B5735/stream.ws", 
        "backup_stream_source_url" : "https://wowzaprod178-i.akamaihd.net/hls/live/801880/0P0p2MzY4Z3lERTlKbHQ4cFYvQ1B5735/playlist.m3u8", 
        "viewers" : (0), 
        "max_viewers" : (0), 
        "name" : "Rocket League", 
        "details" : "1v1, 4 rounds", 
        "modifiers" : [
            {
                "name" : "Kid Goal", 
                "info" : "2 points"
            }, 
            {
                "name" : "Pro Goal", 
                "info" : "1 point"
            }, 
            {
                "name" : "Close Game (less than 10)", 
                "info" : "Kid +3 points"
            }
        ], 
        "game_name" : "Rocket League", 
        "game_type" : "head to head", 
        "game_image_url" : "/assets/games/rocket_league.jpg", 
        "game_platform" : "PC", 
        "players" : [
            {
                "name" : "JUNIOR", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/emagination_avatar.jpg", 
                "is_pro" : false, 
                "score" : (0), 
                "score_adjustment" : (2), 
                "score_multiplier" : (1)
            }, 
            {
                "name" : "PRO-GUY", 
                "avatar" : "https://playsvg.herokuapp.com/assets/avatars/skullkid_avatar.jpg", 
                "is_pro" : true, 
                "score" : (0), 
                "score_adjustment" : (0), 
                "score_multiplier" : (1)
            }
        ], 
        "reactions" : [
            {
                "identifier" : "cherries", 
                "count" : (0), 
                "points" : (0), 
                "is_locked" : true, 
                "unlock_trigger" : "", 
                "time_to_live" : (10), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/cherries.png"
                }, 
                "pendingPoints" : (0)
            }, 
            {
                "identifier" : "coin", 
                "count" : (1), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.01, 
                "recipient" : "kid", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/coin.png"
                }
            }, 
            {
                "identifier" : "smiley", 
                "count" : (5), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (1), 
                "adjustment" : 0.02, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "😀"
                }
            }, 
            {
                "identifier" : "trophy", 
                "count" : (7), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "final minute of each round", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.01, 
                "overheat_cooldown_rate" : 0.5, 
                "overheat_threshold" : (4), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "🏆"
                }
            }, 
            {
                "identifier" : "bomb", 
                "count" : (1), 
                "points" : (2), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : true, 
                "increment" : (2), 
                "adjustment" : (1), 
                "recipient" : "kid", 
                "source" : {
                    "type" : "text", 
                    "value" : "💣"
                }
            }, 
            {
                "identifier" : "pow", 
                "count" : (1), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (500), 
                "adjustment" : (0), 
                "recipient" : "challenge", 
                "source" : {
                    "type" : "image", 
                    "value" : "/assets/reactions/pow.png"
                }
            }, 
            {
                "identifier" : "pro", 
                "count" : (0), 
                "points" : (0), 
                "is_locked" : false, 
                "unlock_trigger" : "sometime", 
                "time_to_live" : (0), 
                "single_use" : false, 
                "increment" : (3), 
                "adjustment" : 0.004, 
                "recipient" : "pro", 
                "source" : {
                    "type" : "player", 
                    "value" : "pro"
                }
            }
        ]
    }
    ]
  }