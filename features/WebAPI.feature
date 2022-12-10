Feature: File Management
    As an user

    Scenario: login to Dropbox with API
        Given user passes access token via env var "<token_env_var>" to be authenticated
        Examples:
            | token_env_var |
            | DROPBOX_TOKEN |

    Scenario: upload file
        Given Dropbox API with access token via env var "<token_env_var>" to upload file "<file_name>"  was called
        Examples:
            | token_env_var | file_name |
            | DROPBOX_TOKEN | test.txt  |


    Scenario: get file metadata
        Given Dropbox API with access token via env var "<token_env_var>" to get file "<file_name>" metadata was called
         Examples:
            | token_env_var | file_name |
            | DROPBOX_TOKEN | test.txt  |



    Scenario: delete file
        Given Dropbox API with access token via env var "<token_env_var>" to delete file "<file_name>" was called
        Then file "<file_name>" is deleted with access token via env var "<token_env_var>"
         Examples:
            | token_env_var | file_name |
            | DROPBOX_TOKEN | test.txt  |

