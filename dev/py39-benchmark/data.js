window.BENCHMARK_DATA = {
  "lastUpdate": 1619809178481,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d26b5804c9b37bfa4d28a8aa9ba276247ef277a",
          "message": "Merge pull request #96 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.5",
          "timestamp": "2021-03-04T14:23:36Z",
          "tree_id": "b1f9c41345508fab2d64b17dec665c583c4cce01",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/1d26b5804c9b37bfa4d28a8aa9ba276247ef277a"
        },
        "date": 1614868076463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14401.688135004993,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200404564376344",
            "extra": "mean: 69.43630431556024 usec\nrounds: 12165"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4129490.8814883195,
            "unit": "iter/sec",
            "range": "stddev: 2.9457543710324346e-8",
            "extra": "mean: 242.16060252898865 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13564.306055143958,
            "unit": "iter/sec",
            "range": "stddev: 0.000015824728941336613",
            "extra": "mean: 73.72290155756052 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129401.45217540771,
            "unit": "iter/sec",
            "range": "stddev: 9.70244852571694e-7",
            "extra": "mean: 7.727888545210983 usec\nrounds: 37172"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15551.797933066982,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430268944208544",
            "extra": "mean: 64.30124698789662 usec\nrounds: 13280"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4123294.1003990388,
            "unit": "iter/sec",
            "range": "stddev: 3.237206152742884e-8",
            "extra": "mean: 242.52453879102987 nsec\nrounds: 175408"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "b727aa006df911ba44a8dfcc53743544e5433ea9",
          "message": ":art: Move misc. helper targets to correct section",
          "timestamp": "2021-03-05T10:38:03-08:00",
          "tree_id": "c89af77c6c48bc9a22e63d0b0592e1ccaaef06a6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/b727aa006df911ba44a8dfcc53743544e5433ea9"
        },
        "date": 1614969734122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15282.373442220354,
            "unit": "iter/sec",
            "range": "stddev: 0.000006892002257760537",
            "extra": "mean: 65.4348621816371 usec\nrounds: 12531"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4179707.5287934393,
            "unit": "iter/sec",
            "range": "stddev: 5.269278349938268e-8",
            "extra": "mean: 239.25118997225792 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13351.219953933505,
            "unit": "iter/sec",
            "range": "stddev: 0.00001899565639018246",
            "extra": "mean: 74.89952254927704 usec\nrounds: 5477"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134042.71617916218,
            "unit": "iter/sec",
            "range": "stddev: 0.000001556589263775596",
            "extra": "mean: 7.4603083890317095 usec\nrounds: 33221"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14996.6040254906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716055647258657",
            "extra": "mean: 66.6817633045616 usec\nrounds: 13642"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4145277.4036201835,
            "unit": "iter/sec",
            "range": "stddev: 4.7695216790622645e-8",
            "extra": "mean: 241.23837867297476 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "43f641705c0fe2b71e45253aeeb0daea49ec9622",
          "message": ":art: Move misc. helper targets to correct section",
          "timestamp": "2021-03-05T10:41:29-08:00",
          "tree_id": "d50943b741f62b36471efd689b1411e17dd43e76",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/43f641705c0fe2b71e45253aeeb0daea49ec9622"
        },
        "date": 1614970270605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 12331.124450586885,
            "unit": "iter/sec",
            "range": "stddev: 0.00007337917939896627",
            "extra": "mean: 81.09560519052309 usec\nrounds: 1811"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3609962.549502701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010625592067286131",
            "extra": "mean: 277.01118399065416 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11571.052448708717,
            "unit": "iter/sec",
            "range": "stddev: 0.00010332093259778127",
            "extra": "mean: 86.42256220276627 usec\nrounds: 7154"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115168.53779387935,
            "unit": "iter/sec",
            "range": "stddev: 0.000006375192189187492",
            "extra": "mean: 8.68292694476794 usec\nrounds: 41667"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14569.949549850857,
            "unit": "iter/sec",
            "range": "stddev: 0.00006634526661886666",
            "extra": "mean: 68.63441747540136 usec\nrounds: 9579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2266914.021188678,
            "unit": "iter/sec",
            "range": "stddev: 9.274142695667135e-7",
            "extra": "mean: 441.1283315789985 nsec\nrounds: 58824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "6942ae2e70eb498e795c8b8436ba16726b51383c",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-03-05T11:26:35-08:00",
          "tree_id": "33507d332ee57eec0a74f55c4f369ebd4476bca4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6942ae2e70eb498e795c8b8436ba16726b51383c"
        },
        "date": 1614972654467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14445.027798899648,
            "unit": "iter/sec",
            "range": "stddev: 0.00006819965943725377",
            "extra": "mean: 69.22797338445933 usec\nrounds: 11835"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3978033.993796264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020837164026321738",
            "extra": "mean: 251.38045616509973 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12148.176364324825,
            "unit": "iter/sec",
            "range": "stddev: 0.00006984113384786179",
            "extra": "mean: 82.3168819755259 usec\nrounds: 7795"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120235.40836145429,
            "unit": "iter/sec",
            "range": "stddev: 0.000010854921391922101",
            "extra": "mean: 8.317017537743777 usec\nrounds: 32786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14700.466240010317,
            "unit": "iter/sec",
            "range": "stddev: 0.00008878199717778292",
            "extra": "mean: 68.02505333322668 usec\nrounds: 10800"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3869494.393472673,
            "unit": "iter/sec",
            "range": "stddev: 4.1976939074771613e-7",
            "extra": "mean: 258.4316963184824 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb3f1eabd1beea7f5ee9657dc53bd829a750b0b",
          "message": "Merge pull request #104 from TeoZosa/dependabot/pip/sphinx-3.5.2",
          "timestamp": "2021-03-08T14:12:41Z",
          "tree_id": "6ace55a4378ca07acb4cce445b353778b4ebb7ff",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/4eb3f1eabd1beea7f5ee9657dc53bd829a750b0b"
        },
        "date": 1615213000510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14330.947152098179,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946699741403228",
            "extra": "mean: 69.77905852186407 usec\nrounds: 9364"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4107681.71907604,
            "unit": "iter/sec",
            "range": "stddev: 9.909060650618192e-7",
            "extra": "mean: 243.4463204283178 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12704.018711000552,
            "unit": "iter/sec",
            "range": "stddev: 0.00003249131256430189",
            "extra": "mean: 78.7152493040717 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130381.27683388459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000186121980875066",
            "extra": "mean: 7.669812907830885 usec\nrounds: 49505"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14214.59957210794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421995573971845",
            "extra": "mean: 70.3502054297901 usec\nrounds: 9872"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4339202.462028144,
            "unit": "iter/sec",
            "range": "stddev: 3.0933419836706857e-7",
            "extra": "mean: 230.4570963791685 nsec\nrounds: 166667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc89c991b4b3f52ba42eb2f0d477cb2e99137ba3",
          "message": "Merge pull request #105 from TeoZosa/dependabot/pip/pygments-2.8.1",
          "timestamp": "2021-03-08T14:21:26Z",
          "tree_id": "3d137e0a667b16cbe76a25aaa251c59fb9f7065e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bc89c991b4b3f52ba42eb2f0d477cb2e99137ba3"
        },
        "date": 1615213524692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15713.9889369326,
            "unit": "iter/sec",
            "range": "stddev: 0.000018249493759025546",
            "extra": "mean: 63.637565484706386 usec\nrounds: 11224"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4317338.181299419,
            "unit": "iter/sec",
            "range": "stddev: 3.639658272440495e-7",
            "extra": "mean: 231.62419945020702 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12592.328569049323,
            "unit": "iter/sec",
            "range": "stddev: 0.00012545889973322784",
            "extra": "mean: 79.41342973355218 usec\nrounds: 8482"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138968.33586602946,
            "unit": "iter/sec",
            "range": "stddev: 0.000007821619157587337",
            "extra": "mean: 7.195883823233204 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15883.819967435233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152667641514975",
            "extra": "mean: 62.957147716996595 usec\nrounds: 13228"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4315028.848272361,
            "unit": "iter/sec",
            "range": "stddev: 5.2695548042312756e-8",
            "extra": "mean: 231.74816094215362 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4f459e5f2c721ce335282a902690ed6bb5710d6",
          "message": "Merge pull request #79 from TeoZosa/dependabot/pip/mypy-0.812\n\n⬆️ Bump mypy from 0.800 to 0.812",
          "timestamp": "2021-03-30T18:27:34-07:00",
          "tree_id": "f0e5ee8e309bfee83f8c87252c9c85680bf2b737",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f4f459e5f2c721ce335282a902690ed6bb5710d6"
        },
        "date": 1617154309182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15176.644389565008,
            "unit": "iter/sec",
            "range": "stddev: 0.00002101299953432001",
            "extra": "mean: 65.89071828602437 usec\nrounds: 12392"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4691324.689296331,
            "unit": "iter/sec",
            "range": "stddev: 1.8085501670488953e-7",
            "extra": "mean: 213.1594093841713 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12360.422325042968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776535431596457",
            "extra": "mean: 80.90338450442258 usec\nrounds: 6892"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136977.724104849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061860333357532216",
            "extra": "mean: 7.300457111074165 usec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14938.233839274124,
            "unit": "iter/sec",
            "range": "stddev: 0.000015533137759678697",
            "extra": "mean: 66.94231799818927 usec\nrounds: 5956"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4393688.638423364,
            "unit": "iter/sec",
            "range": "stddev: 2.286553705106069e-7",
            "extra": "mean: 227.59919564056722 nsec\nrounds: 161291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "027a8068f4473dce4edee09207d658e0d8b302fd",
          "message": "Merge pull request #99 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.0\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 4.0.0 to 4.1.0",
          "timestamp": "2021-03-30T18:27:53-07:00",
          "tree_id": "aaa79efb588cab848656f8a7c432b5445743ea73",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/027a8068f4473dce4edee09207d658e0d8b302fd"
        },
        "date": 1617154333213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15946.655111806875,
            "unit": "iter/sec",
            "range": "stddev: 0.000017310208969345207",
            "extra": "mean: 62.70907553895749 usec\nrounds: 12391"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4168666.3269021804,
            "unit": "iter/sec",
            "range": "stddev: 5.346103836267458e-8",
            "extra": "mean: 239.88487482093342 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13733.632067107057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053515994354836316",
            "extra": "mean: 72.81395009810005 usec\nrounds: 5110"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132494.29701087688,
            "unit": "iter/sec",
            "range": "stddev: 0.000003859466168394855",
            "extra": "mean: 7.547494666264065 usec\nrounds: 44246"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15964.639329071806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001065453877451004",
            "extra": "mean: 62.6384335647964 usec\nrounds: 13532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4100451.108649245,
            "unit": "iter/sec",
            "range": "stddev: 5.025872652370721e-7",
            "extra": "mean: 243.8756062452873 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "bc3c7dcdf3e2c40540d1991ad1e05e63fed574cf",
          "message": ":green_heart: Remove `poetry-check` pre-commit hook",
          "timestamp": "2021-03-30T18:40:04-07:00",
          "tree_id": "35c2d8fa46277c9b4f9c35e0f1b40a05ba3ccc87",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bc3c7dcdf3e2c40540d1991ad1e05e63fed574cf"
        },
        "date": 1617155355470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15594.62518483728,
            "unit": "iter/sec",
            "range": "stddev: 0.000046178415875443014",
            "extra": "mean: 64.12465757575913 usec\nrounds: 11807"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4270385.257114101,
            "unit": "iter/sec",
            "range": "stddev: 1.1089112807623947e-7",
            "extra": "mean: 234.17090959979976 nsec\nrounds: 11326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13307.926176726049,
            "unit": "iter/sec",
            "range": "stddev: 0.00004162239403027689",
            "extra": "mean: 75.1431881061137 usec\nrounds: 7937"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 127853.04133195139,
            "unit": "iter/sec",
            "range": "stddev: 0.000008925347905327897",
            "extra": "mean: 7.821479955284357 usec\nrounds: 33899"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15532.973782454033,
            "unit": "iter/sec",
            "range": "stddev: 0.00005918713680688421",
            "extra": "mean: 64.37917259150949 usec\nrounds: 13193"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2954014.9375531864,
            "unit": "iter/sec",
            "range": "stddev: 2.7773815596498665e-7",
            "extra": "mean: 338.5223233936322 nsec\nrounds: 5801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "026d915a0bf4ce7b0ed4709cb6e3cde1c38cb7b8",
          "message": ":green_heart: Remove `poetry-check` pre-commit hook",
          "timestamp": "2021-03-30T19:15:47-07:00",
          "tree_id": "7a11d23fbf3ac63044bb5e6301d5646905ef62e8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/026d915a0bf4ce7b0ed4709cb6e3cde1c38cb7b8"
        },
        "date": 1617157204559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14641.457564253795,
            "unit": "iter/sec",
            "range": "stddev: 0.000021255397891304014",
            "extra": "mean: 68.29921103220198 usec\nrounds: 12690"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4722211.486837634,
            "unit": "iter/sec",
            "range": "stddev: 4.435441073129279e-7",
            "extra": "mean: 211.76518730426298 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12214.894554867918,
            "unit": "iter/sec",
            "range": "stddev: 0.000020133699303310525",
            "extra": "mean: 81.86726422468189 usec\nrounds: 7645"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 160548.77900476276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026637338538005972",
            "extra": "mean: 6.228636593806387 usec\nrounds: 28010"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14690.00096263807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000147421566154909",
            "extra": "mean: 68.07351494008462 usec\nrounds: 13755"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4982039.215713602,
            "unit": "iter/sec",
            "range": "stddev: 5.7255431486763524e-8",
            "extra": "mean: 200.72102139348078 nsec\nrounds: 188644"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5c8b260c341cc0553010731d0e2967ac80d24a8e",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:45:42-07:00",
          "tree_id": "0cb40c2555845e1ed4d4d3ba29ea0b2d71cea309",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5c8b260c341cc0553010731d0e2967ac80d24a8e"
        },
        "date": 1617159001536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15822.66723322185,
            "unit": "iter/sec",
            "range": "stddev: 0.000030267973985610517",
            "extra": "mean: 63.20046963386574 usec\nrounds: 5236"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4079072.73314242,
            "unit": "iter/sec",
            "range": "stddev: 9.592295392696686e-7",
            "extra": "mean: 245.15375562563798 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13520.672698851127,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592567076226491",
            "extra": "mean: 73.96081705941832 usec\nrounds: 9074"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116979.3479977787,
            "unit": "iter/sec",
            "range": "stddev: 0.000020037140515501532",
            "extra": "mean: 8.548517470100695 usec\nrounds: 3320"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15803.27988104123,
            "unit": "iter/sec",
            "range": "stddev: 0.000040464827288587743",
            "extra": "mean: 63.27800352379212 usec\nrounds: 13624"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4118921.917645888,
            "unit": "iter/sec",
            "range": "stddev: 3.8550881469917747e-7",
            "extra": "mean: 242.78197547662762 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "12dab5d9a9e4dcf1e657d527ac026c6c8103768c",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:48:30-07:00",
          "tree_id": "9594a584d9e60aa053fd48ccdb1a24219f334a81",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/12dab5d9a9e4dcf1e657d527ac026c6c8103768c"
        },
        "date": 1617159480312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14427.620906984821,
            "unit": "iter/sec",
            "range": "stddev: 0.00011692255415355067",
            "extra": "mean: 69.3114967773981 usec\nrounds: 10707"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3999245.2760516205,
            "unit": "iter/sec",
            "range": "stddev: 1.645761439096303e-7",
            "extra": "mean: 250.0471791485869 nsec\nrounds: 5158"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12503.466912662518,
            "unit": "iter/sec",
            "range": "stddev: 0.00008656795556906977",
            "extra": "mean: 79.97781791122904 usec\nrounds: 9067"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115711.13724323029,
            "unit": "iter/sec",
            "range": "stddev: 0.000005866605154586798",
            "extra": "mean: 8.64221045462506 usec\nrounds: 31546"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14855.096246583906,
            "unit": "iter/sec",
            "range": "stddev: 0.00009720609511214616",
            "extra": "mean: 67.31696539697352 usec\nrounds: 13756"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3929966.5099823656,
            "unit": "iter/sec",
            "range": "stddev: 1.2081562294429366e-7",
            "extra": "mean: 254.45509458157633 nsec\nrounds: 5203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "59c807d59fe3fc9817aca2999e22cc538b88fa7a",
          "message": ":green_heart: Temporarily disable `log4brains` until fixed\n\nSee: /thomvaill/log4brains#27",
          "timestamp": "2021-03-30T19:56:58-07:00",
          "tree_id": "a46d38e0285aeac87038b0d70aaec3fbf71da1d6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/59c807d59fe3fc9817aca2999e22cc538b88fa7a"
        },
        "date": 1617159970627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14711.83198176583,
            "unit": "iter/sec",
            "range": "stddev: 0.00005015624536122846",
            "extra": "mean: 67.97250004210366 usec\nrounds: 11961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3722062.516391933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015286092795740683",
            "extra": "mean: 268.66824390938007 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12955.780388187459,
            "unit": "iter/sec",
            "range": "stddev: 0.00011355598877038869",
            "extra": "mean: 77.18562448864589 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115435.831454598,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123531621722086",
            "extra": "mean: 8.662821477517658 usec\nrounds: 42370"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13972.585342558114,
            "unit": "iter/sec",
            "range": "stddev: 0.00007500149667980507",
            "extra": "mean: 71.56871656057598 usec\nrounds: 13315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3928110.11898659,
            "unit": "iter/sec",
            "range": "stddev: 1.3928515436522831e-8",
            "extra": "mean: 254.57534786681646 nsec\nrounds: 11338"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f769ed3261f70cace81a1a1a6ba73349bcd16a2",
          "message": "Merge pull request #107 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.11.1\n\n⬆️ Bump pre-commit from 2.10.1 to 2.11.1 in /.github/workflows",
          "timestamp": "2021-03-30T22:36:19-07:00",
          "tree_id": "330fe9cdc63269a4c7eec2a3993ec79e055ed4d1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/9f769ed3261f70cace81a1a1a6ba73349bcd16a2"
        },
        "date": 1617169186229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16577.806010412573,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443953805317564",
            "extra": "mean: 60.321613087515736 usec\nrounds: 6831"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4959610.8359467285,
            "unit": "iter/sec",
            "range": "stddev: 1.2669940004942438e-7",
            "extra": "mean: 201.62872311532422 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14575.201230868714,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972414582920583",
            "extra": "mean: 68.60968738339662 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152051.86416850542,
            "unit": "iter/sec",
            "range": "stddev: 3.010372033911948e-7",
            "extra": "mean: 6.576703320728708 usec\nrounds: 26109"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16526.820335572556,
            "unit": "iter/sec",
            "range": "stddev: 0.000006422883040195606",
            "extra": "mean: 60.507706848339495 usec\nrounds: 14368"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4730385.841295989,
            "unit": "iter/sec",
            "range": "stddev: 3.552891693239722e-8",
            "extra": "mean: 211.39924597061696 nsec\nrounds: 5835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a5e9081d08843e262d25036d58a0ce1402aaf74",
          "message": "Merge pull request #109 from TeoZosa/dependabot/pip/pre-commit-2.11.1\n\n⬆️ Bump pre-commit from 2.10.1 to 2.11.1",
          "timestamp": "2021-03-31T17:55:44-07:00",
          "tree_id": "d7533f6792bb85b782849569bcc6b62d3fc1bdd5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6a5e9081d08843e262d25036d58a0ce1402aaf74"
        },
        "date": 1617238782133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15871.798762540117,
            "unit": "iter/sec",
            "range": "stddev: 0.000017242545596004585",
            "extra": "mean: 63.00483108191578 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4158169.711289636,
            "unit": "iter/sec",
            "range": "stddev: 2.2781486665326427e-8",
            "extra": "mean: 240.49042473744123 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13010.293865398988,
            "unit": "iter/sec",
            "range": "stddev: 0.000026911867306272035",
            "extra": "mean: 76.86221466984004 usec\nrounds: 6326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132921.38689217888,
            "unit": "iter/sec",
            "range": "stddev: 8.880725911866804e-7",
            "extra": "mean: 7.523243801324197 usec\nrounds: 33113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15618.044767898054,
            "unit": "iter/sec",
            "range": "stddev: 0.000023811556494012316",
            "extra": "mean: 64.02850131761944 usec\nrounds: 13662"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2339030.2381690564,
            "unit": "iter/sec",
            "range": "stddev: 2.9251625912099443e-7",
            "extra": "mean: 427.52760681827647 nsec\nrounds: 3586"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "204e457fca00ee54142778646afce198b97d8213",
          "message": "Merge pull request #108 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.8.0\n\n⬆️ Bump cruft from 2.6.1 to 2.8.0 in /.github/workflows",
          "timestamp": "2021-03-31T17:55:31-07:00",
          "tree_id": "84d2603467af499aa4b7fe6a2ae029358be4a41c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/204e457fca00ee54142778646afce198b97d8213"
        },
        "date": 1617238801054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15547.565896944463,
            "unit": "iter/sec",
            "range": "stddev: 0.000025845805709839064",
            "extra": "mean: 64.31874974053196 usec\nrounds: 11560"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3935371.2496442096,
            "unit": "iter/sec",
            "range": "stddev: 7.503607762229606e-7",
            "extra": "mean: 254.10563236958322 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12926.854945706289,
            "unit": "iter/sec",
            "range": "stddev: 0.00005349395612648501",
            "extra": "mean: 77.35833690407073 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129640.46002314927,
            "unit": "iter/sec",
            "range": "stddev: 8.563943554584313e-7",
            "extra": "mean: 7.713641249201329 usec\nrounds: 31947"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14740.371329144516,
            "unit": "iter/sec",
            "range": "stddev: 0.00010809817493005396",
            "extra": "mean: 67.84089611248868 usec\nrounds: 13351"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4085765.871098216,
            "unit": "iter/sec",
            "range": "stddev: 3.4544172588753964e-8",
            "extra": "mean: 244.75215456486134 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84b8ac562337ee8e042a3bff99dc564cedefeda7",
          "message": "Merge pull request #111 from TeoZosa/dependabot/pip/cruft-2.8.0\n\n⬆️ Bump cruft from 2.7.0 to 2.8.0",
          "timestamp": "2021-04-01T09:59:45-07:00",
          "tree_id": "987c89e46d48a397d5dcaabb62a636e41ce05fb7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/84b8ac562337ee8e042a3bff99dc564cedefeda7"
        },
        "date": 1617296640375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15225.446667639311,
            "unit": "iter/sec",
            "range": "stddev: 0.000027567364419770526",
            "extra": "mean: 65.67951810080125 usec\nrounds: 3812"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4369128.655258857,
            "unit": "iter/sec",
            "range": "stddev: 4.35290903047978e-7",
            "extra": "mean: 228.87858859388245 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12720.808256839488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348173031081368",
            "extra": "mean: 78.61135706234221 usec\nrounds: 4439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124949.03804866233,
            "unit": "iter/sec",
            "range": "stddev: 0.000009890860530659114",
            "extra": "mean: 8.003262895153643 usec\nrounds: 48080"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15315.124638929532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003781202904232663",
            "extra": "mean: 65.2949305719719 usec\nrounds: 7605"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2432898.080468933,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041460528090838",
            "extra": "mean: 411.0324259071524 nsec\nrounds: 56498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a025a2b5c14d2d008d9177f761deb00d5cf1ffae",
          "message": "Merge pull request #115 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-v5.15.0\n\n⬆️ Bump release-drafter/release-drafter from v5.14.0 to v5.15.0",
          "timestamp": "2021-04-01T10:00:06-07:00",
          "tree_id": "ed89520603fa76c4cfce45b2ece672a76d122b55",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a025a2b5c14d2d008d9177f761deb00d5cf1ffae"
        },
        "date": 1617296647530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14340.616324793233,
            "unit": "iter/sec",
            "range": "stddev: 0.000045977621679915335",
            "extra": "mean: 69.73200993259391 usec\nrounds: 12887"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4532523.047116747,
            "unit": "iter/sec",
            "range": "stddev: 3.2825818365266284e-7",
            "extra": "mean: 220.62767019720008 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12737.686620762674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006809393645981545",
            "extra": "mean: 78.50719127992839 usec\nrounds: 9243"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134328.70293010463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542757742436988",
            "extra": "mean: 7.4444253401324865 usec\nrounds: 3315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15537.118213942345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002010883420508733",
            "extra": "mean: 64.36199984001169 usec\nrounds: 12516"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4535210.359972053,
            "unit": "iter/sec",
            "range": "stddev: 1.6642002485514078e-7",
            "extra": "mean: 220.49693853828225 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd9d271cdceb96750ab6f54107600200c2fb759c",
          "message": "Merge pull request #116 from TeoZosa/dependabot/pip/sphinx-3.5.3\n\n⬆️ Bump sphinx from 3.5.2 to 3.5.3",
          "timestamp": "2021-04-01T12:52:36-07:00",
          "tree_id": "f022476baec45229fd7c878b9f7e6e47d005e3ee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/dd9d271cdceb96750ab6f54107600200c2fb759c"
        },
        "date": 1617306992744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15478.75487398889,
            "unit": "iter/sec",
            "range": "stddev: 0.000024319127195322812",
            "extra": "mean: 64.60467964903556 usec\nrounds: 12196"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4712003.846165645,
            "unit": "iter/sec",
            "range": "stddev: 4.243901599468448e-7",
            "extra": "mean: 212.22393543154064 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12665.662061658966,
            "unit": "iter/sec",
            "range": "stddev: 0.000018986082698115114",
            "extra": "mean: 78.95363030624065 usec\nrounds: 7279"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132081.10082799516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004566992001690748",
            "extra": "mean: 7.571105886695076 usec\nrounds: 46512"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15116.083966817108,
            "unit": "iter/sec",
            "range": "stddev: 0.000023278025535014668",
            "extra": "mean: 66.15470000002675 usec\nrounds: 8540"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4473863.414103726,
            "unit": "iter/sec",
            "range": "stddev: 3.2114290770732607e-7",
            "extra": "mean: 223.5204581450469 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fb12c08c1257e16de156116ca5330b500876c3f",
          "message": "Merge pull request #119 from TeoZosa/dependabot/pip/pylint-2.7.4\n\n⬆️ Bump pylint from 2.7.2 to 2.7.4",
          "timestamp": "2021-04-01T13:09:18-07:00",
          "tree_id": "06811da5c2eeaf63f939a4cd4f305f6a3fd3f67f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6fb12c08c1257e16de156116ca5330b500876c3f"
        },
        "date": 1617307984622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15716.63735565116,
            "unit": "iter/sec",
            "range": "stddev: 0.000015367730463168933",
            "extra": "mean: 63.626841885515326 usec\nrounds: 12453"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2800078.226861787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013129344103082737",
            "extra": "mean: 357.13287950556975 nsec\nrounds: 5362"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13606.048848721224,
            "unit": "iter/sec",
            "range": "stddev: 0.000013541715927736482",
            "extra": "mean: 73.49672275312946 usec\nrounds: 8368"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125525.2906311642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018530143351456635",
            "extra": "mean: 7.966522084687607 usec\nrounds: 34481"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15653.757238759043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000666592220976763",
            "extra": "mean: 63.88242673931203 usec\nrounds: 13568"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4049630.589106046,
            "unit": "iter/sec",
            "range": "stddev: 1.4851571373525048e-7",
            "extra": "mean: 246.93610392268178 nsec\nrounds: 5023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5d716e504c5f07f70a8a2845141c97e3c91e4e8",
          "message": "Merge pull request #120 from TeoZosa/dependabot/pip/importlib-metadata-3.10.0\n\n⬆️ Bump importlib-metadata from 2.1.1 to 3.10.0",
          "timestamp": "2021-04-01T13:23:08-07:00",
          "tree_id": "4fbe3a1adce134633c08f6acc36593e81eff300a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a5d716e504c5f07f70a8a2845141c97e3c91e4e8"
        },
        "date": 1617308858974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15206.600765522942,
            "unit": "iter/sec",
            "range": "stddev: 0.000013455974314230452",
            "extra": "mean: 65.760916290197 usec\nrounds: 2879"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4134633.5420820173,
            "unit": "iter/sec",
            "range": "stddev: 2.8096617957091716e-7",
            "extra": "mean: 241.859402973017 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12446.677447985725,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517748057164017",
            "extra": "mean: 80.34272633632298 usec\nrounds: 6117"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 126291.58591186111,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088304220384654",
            "extra": "mean: 7.9181838820038255 usec\nrounds: 44844"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14852.754309635538,
            "unit": "iter/sec",
            "range": "stddev: 0.00001849174024809098",
            "extra": "mean: 67.3275797305327 usec\nrounds: 12166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4047471.2579311514,
            "unit": "iter/sec",
            "range": "stddev: 3.711690015837968e-7",
            "extra": "mean: 247.06784465491762 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5e797d096b13772636b345ba1c683b47e6df5dcd",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-04-13T13:16:27-07:00",
          "tree_id": "c311f64d832dd305664edfc8bc10892be12655a1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5e797d096b13772636b345ba1c683b47e6df5dcd"
        },
        "date": 1618345254738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14876.657592824738,
            "unit": "iter/sec",
            "range": "stddev: 0.00009892132072810783",
            "extra": "mean: 67.21940017509826 usec\nrounds: 10288"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3978998.5156568433,
            "unit": "iter/sec",
            "range": "stddev: 2.065719372816281e-7",
            "extra": "mean: 251.31952074505332 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12495.150970367282,
            "unit": "iter/sec",
            "range": "stddev: 0.000015376910220090286",
            "extra": "mean: 80.03104583302253 usec\nrounds: 9251"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117278.78092810817,
            "unit": "iter/sec",
            "range": "stddev: 0.000005136903187262556",
            "extra": "mean: 8.526691632418993 usec\nrounds: 43860"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14845.15663352133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000176201664182704",
            "extra": "mean: 67.36203764545905 usec\nrounds: 7305"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943828.9580419557,
            "unit": "iter/sec",
            "range": "stddev: 1.8588051480042825e-7",
            "extra": "mean: 253.56069206832112 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "a826ea2ec51994eec38d6ce0ff6db084a4d3191f",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-04-13T13:19:44-07:00",
          "tree_id": "a8f17b1e4af6b94fd8ee7237471b4e678e1e3872",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/a826ea2ec51994eec38d6ce0ff6db084a4d3191f"
        },
        "date": 1618345745304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15385.90319901958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006445406494954123",
            "extra": "mean: 64.99455943956036 usec\nrounds: 12500"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4157858.4213745613,
            "unit": "iter/sec",
            "range": "stddev: 1.86696010277441e-8",
            "extra": "mean: 240.50842973849737 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13243.970397139135,
            "unit": "iter/sec",
            "range": "stddev: 0.000055665085198364934",
            "extra": "mean: 75.5060582297898 usec\nrounds: 8913"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122349.85083336626,
            "unit": "iter/sec",
            "range": "stddev: 5.903469853777816e-7",
            "extra": "mean: 8.17328336069608 usec\nrounds: 38908"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15063.724186925661,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313900020094446",
            "extra": "mean: 66.38464615994066 usec\nrounds: 13020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4157274.535358737,
            "unit": "iter/sec",
            "range": "stddev: 1.6804690900690523e-8",
            "extra": "mean: 240.54220896252448 nsec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "ba226506d7ec28e269432141e0e987f900262839",
          "message": ":arrow_up: Auto-update `pre-commit` hooks",
          "timestamp": "2021-04-13T13:27:12-07:00",
          "tree_id": "557dc778e13d4b16bd321eab0ce32a832d548a4b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ba226506d7ec28e269432141e0e987f900262839"
        },
        "date": 1618346088003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15126.31448809773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007288904094651896",
            "extra": "mean: 66.1099569751018 usec\nrounds: 9785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3781032.140396234,
            "unit": "iter/sec",
            "range": "stddev: 3.906722055494764e-7",
            "extra": "mean: 264.4780480220577 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12553.077670278846,
            "unit": "iter/sec",
            "range": "stddev: 0.000012441109875246502",
            "extra": "mean: 79.66173923767226 usec\nrounds: 8897"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111131.37995920873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006692906103742788",
            "extra": "mean: 8.998358522741773 usec\nrounds: 36497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15009.973149696638,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778555106094043",
            "extra": "mean: 66.62237100805278 usec\nrounds: 13245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3889153.0679635787,
            "unit": "iter/sec",
            "range": "stddev: 1.1141444061694197e-7",
            "extra": "mean: 257.125390162089 nsec\nrounds: 87720"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "423655be1a02a7112030df9a4f95ef561bee8bfe",
          "message": "Merge pull request #126 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.12.0\n\n⬆️ Bump pre-commit from 2.11.1 to 2.12.0 in /.github/workflows",
          "timestamp": "2021-04-13T14:06:19-07:00",
          "tree_id": "76861932d0f6641cac992e5f9a3da30fa0e4fcb7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/423655be1a02a7112030df9a4f95ef561bee8bfe"
        },
        "date": 1618348242550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14347.290995291005,
            "unit": "iter/sec",
            "range": "stddev: 0.00009087635429455404",
            "extra": "mean: 69.69956909135075 usec\nrounds: 11991"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4064498.326984847,
            "unit": "iter/sec",
            "range": "stddev: 3.875499731559526e-7",
            "extra": "mean: 246.03282362323583 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12049.31015906808,
            "unit": "iter/sec",
            "range": "stddev: 0.00012032267373830383",
            "extra": "mean: 82.99230302802184 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122944.5313055369,
            "unit": "iter/sec",
            "range": "stddev: 0.00001402435082749746",
            "extra": "mean: 8.133749337047284 usec\nrounds: 42017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14571.255048758168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004282470339363561",
            "extra": "mean: 68.62826823453514 usec\nrounds: 9488"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4107951.1020161007,
            "unit": "iter/sec",
            "range": "stddev: 3.14956185790949e-7",
            "extra": "mean: 243.43035619606053 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "520e91c91ac82f054672ae63b0609344944d0097",
          "message": "Merge pull request #133 from TeoZosa/dependabot/github_actions/actions/setup-python-v2.2.2\n\n⬆️ Update actions/setup-python requirement to v2.2.2",
          "timestamp": "2021-04-13T14:06:25-07:00",
          "tree_id": "6088dbf210567313cb2a7298af8b96994f36cecc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/520e91c91ac82f054672ae63b0609344944d0097"
        },
        "date": 1618348248786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14568.292171442898,
            "unit": "iter/sec",
            "range": "stddev: 0.00002740751071531758",
            "extra": "mean: 68.64222574834291 usec\nrounds: 12195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4231200.832630159,
            "unit": "iter/sec",
            "range": "stddev: 5.234017219518034e-7",
            "extra": "mean: 236.33952619031 nsec\nrounds: 12579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12376.798405749907,
            "unit": "iter/sec",
            "range": "stddev: 0.000044068096256521666",
            "extra": "mean: 80.79633902216817 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129113.41251427234,
            "unit": "iter/sec",
            "range": "stddev: 0.000009498441321591733",
            "extra": "mean: 7.7451287246354745 usec\nrounds: 37452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14439.324480774845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005632930211394472",
            "extra": "mean: 69.25531740293282 usec\nrounds: 13831"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4138662.488301003,
            "unit": "iter/sec",
            "range": "stddev: 5.00134456367398e-7",
            "extra": "mean: 241.62395528172058 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "3dd7e3017bdb2d9ebd1522feb687944d9bfe8226",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging",
          "timestamp": "2021-04-26T08:00:07-07:00",
          "tree_id": "6cab88aeff2024d8b338bc72d74bce079f8c0a05",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/3dd7e3017bdb2d9ebd1522feb687944d9bfe8226"
        },
        "date": 1619449436308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16514.350568316582,
            "unit": "iter/sec",
            "range": "stddev: 0.000008293319377129495",
            "extra": "mean: 60.55339541589594 usec\nrounds: 6239"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4978525.50849268,
            "unit": "iter/sec",
            "range": "stddev: 3.070099108281889e-7",
            "extra": "mean: 200.86268480357407 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14493.444229532175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006695669411120763",
            "extra": "mean: 68.99671217986798 usec\nrounds: 9294"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147442.13516379634,
            "unit": "iter/sec",
            "range": "stddev: 4.962306051709002e-7",
            "extra": "mean: 6.782321748725903 usec\nrounds: 46297"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16547.310164639654,
            "unit": "iter/sec",
            "range": "stddev: 0.00000290423161139443",
            "extra": "mean: 60.432782733288235 usec\nrounds: 9776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4988771.750536678,
            "unit": "iter/sec",
            "range": "stddev: 1.0547728575437755e-7",
            "extra": "mean: 200.4501408372445 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bc83e9750f20e999762dba38ebc4d0560c3f72b",
          "message": "Merge pull request #139 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.12.0\n\n⬆️ Bump sphinx-autodoc-typehints from 1.11.1 to 1.12.0",
          "timestamp": "2021-04-26T08:13:35-07:00",
          "tree_id": "9716c00eecba0e7e15061963971a553b5d9edd66",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/3bc83e9750f20e999762dba38ebc4d0560c3f72b"
        },
        "date": 1619450251140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14526.776546902267,
            "unit": "iter/sec",
            "range": "stddev: 0.000022010359509173653",
            "extra": "mean: 68.83839623823793 usec\nrounds: 11377"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3915514.56076774,
            "unit": "iter/sec",
            "range": "stddev: 1.0913831639061539e-7",
            "extra": "mean: 255.3942743609693 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11942.579801858508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005054338254391468",
            "extra": "mean: 83.7340019150954 usec\nrounds: 5744"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119882.31274910527,
            "unit": "iter/sec",
            "range": "stddev: 0.000004607951341147832",
            "extra": "mean: 8.34151408217192 usec\nrounds: 43104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14657.128518979762,
            "unit": "iter/sec",
            "range": "stddev: 0.000021881966797364313",
            "extra": "mean: 68.22618759909781 usec\nrounds: 13870"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3991486.520501355,
            "unit": "iter/sec",
            "range": "stddev: 9.733021612939197e-8",
            "extra": "mean: 250.5332273737152 nsec\nrounds: 11325"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f9c3f26b099157d29d274e9f5b86a22d3a3392e",
          "message": "Merge pull request #146 from TeoZosa/dependabot/pip/importlib-metadata-4.0.1\n\n⬆️ Bump importlib-metadata from 3.10.1 to 4.0.1",
          "timestamp": "2021-04-26T09:31:45-07:00",
          "tree_id": "d984ca5dcfc32fcfe831b061471e79f08e4381ee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/6f9c3f26b099157d29d274e9f5b86a22d3a3392e"
        },
        "date": 1619454947249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15121.141959125966,
            "unit": "iter/sec",
            "range": "stddev: 0.00004514436900014683",
            "extra": "mean: 66.13257138271071 usec\nrounds: 6262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3886122.6955827507,
            "unit": "iter/sec",
            "range": "stddev: 2.0651742111512524e-7",
            "extra": "mean: 257.3258948144755 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12664.74829651446,
            "unit": "iter/sec",
            "range": "stddev: 0.000018645852211637927",
            "extra": "mean: 78.95932683282903 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114406.84211805325,
            "unit": "iter/sec",
            "range": "stddev: 0.000007768313557084317",
            "extra": "mean: 8.740735968991503 usec\nrounds: 45453"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14936.775686511872,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232408716001119",
            "extra": "mean: 66.94885301805897 usec\nrounds: 6511"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3641595.8100695643,
            "unit": "iter/sec",
            "range": "stddev: 8.516597487005165e-7",
            "extra": "mean: 274.6048853732488 nsec\nrounds: 153847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcc0fc461a4542409e6ce02d19cc5fa97e601668",
          "message": "Merge pull request #147 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1\n\n⬆️ Bump pip from 21.0.1 to 21.1 in /.github/workflows",
          "timestamp": "2021-04-26T09:31:57-07:00",
          "tree_id": "6025933f27760b7036abf240d55e3fc95a415b6d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bcc0fc461a4542409e6ce02d19cc5fa97e601668"
        },
        "date": 1619454969572,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14694.067894924503,
            "unit": "iter/sec",
            "range": "stddev: 0.000057538330755819676",
            "extra": "mean: 68.05467397802151 usec\nrounds: 7386"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3725235.704696103,
            "unit": "iter/sec",
            "range": "stddev: 0.000001040150903282755",
            "extra": "mean: 268.4393899529735 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12348.56144605229,
            "unit": "iter/sec",
            "range": "stddev: 0.000032335300605089345",
            "extra": "mean: 80.98109276685746 usec\nrounds: 9346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118757.3028662069,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235287669018566",
            "extra": "mean: 8.420534787040502 usec\nrounds: 41323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14075.537931554061,
            "unit": "iter/sec",
            "range": "stddev: 0.00011371495215084901",
            "extra": "mean: 71.04524209751402 usec\nrounds: 10661"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3775351.904922153,
            "unit": "iter/sec",
            "range": "stddev: 8.51905989240463e-7",
            "extra": "mean: 264.8759705542964 nsec\nrounds: 169492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87e985895bbdbde884fa338e95e2fbcf76767961",
          "message": "Merge pull request #152 from TeoZosa/dependabot/pip/black-21.4b0\n\n⬆️ Bump black from 20.8b1 to 21.4b0",
          "timestamp": "2021-04-26T10:39:26-07:00",
          "tree_id": "6ec822a16705fcea22fe94ad59f471f23a53a90c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/87e985895bbdbde884fa338e95e2fbcf76767961"
        },
        "date": 1619458973297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16235.824371282644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056267994552236196",
            "extra": "mean: 61.59219126370724 usec\nrounds: 7257"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4925067.829067238,
            "unit": "iter/sec",
            "range": "stddev: 1.3192158060076116e-7",
            "extra": "mean: 203.04288889130677 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14565.172944371878,
            "unit": "iter/sec",
            "range": "stddev: 0.000002666786871497557",
            "extra": "mean: 68.65692593004256 usec\nrounds: 8681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147971.62823193206,
            "unit": "iter/sec",
            "range": "stddev: 5.407760700501511e-7",
            "extra": "mean: 6.758052283053822 usec\nrounds: 33223"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16365.229938286742,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275666120935586",
            "extra": "mean: 61.10516037788645 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5078571.225924462,
            "unit": "iter/sec",
            "range": "stddev: 5.0204884086459056e-8",
            "extra": "mean: 196.90577438304604 nsec\nrounds: 104167"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81ccf9d75a2098288832da691980a621b2b3b16c",
          "message": "Merge pull request #154 from TeoZosa/dependabot/pip/pylint-2.8.2",
          "timestamp": "2021-04-27T13:12:20Z",
          "tree_id": "c37548a2e165d0b39c91c719bf01a243d1db49b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/81ccf9d75a2098288832da691980a621b2b3b16c"
        },
        "date": 1619808310586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14846.360058654038,
            "unit": "iter/sec",
            "range": "stddev: 0.00009384192220086366",
            "extra": "mean: 67.35657737312478 usec\nrounds: 11535"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3742805.656369319,
            "unit": "iter/sec",
            "range": "stddev: 7.902493937329882e-7",
            "extra": "mean: 267.17924781903946 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12170.731234709558,
            "unit": "iter/sec",
            "range": "stddev: 0.00016291636650663394",
            "extra": "mean: 82.16433184787718 usec\nrounds: 8977"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116385.95755658249,
            "unit": "iter/sec",
            "range": "stddev: 0.000007484401950410243",
            "extra": "mean: 8.592101839380732 usec\nrounds: 41153"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14905.863033071753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696340020187869",
            "extra": "mean: 67.08769547803387 usec\nrounds: 7740"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3645459.122573249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010740103161382334",
            "extra": "mean: 274.3138700443725 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a297118b56fc9650d1cf7c045e768a5d352a3c",
          "message": "Merge pull request #156 from TeoZosa/dependabot/pip/black-21.4b2\n\n⬆️ Bump black from 21.4b0 to 21.4b2",
          "timestamp": "2021-04-30T11:55:44-07:00",
          "tree_id": "787440b5bc9bab9736e950da1fae9f239a3a0a28",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/14a297118b56fc9650d1cf7c045e768a5d352a3c"
        },
        "date": 1619809177306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14550.804780612845,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342538975284302",
            "extra": "mean: 68.724721077447 usec\nrounds: 11211"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4442231.849897963,
            "unit": "iter/sec",
            "range": "stddev: 2.41890106364351e-7",
            "extra": "mean: 225.1120683902795 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11881.52455082397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000655662415836819",
            "extra": "mean: 84.164283440432 usec\nrounds: 4523"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124243.21188271615,
            "unit": "iter/sec",
            "range": "stddev: 0.000018869381344801655",
            "extra": "mean: 8.048729462531814 usec\nrounds: 26525"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14066.181867299172,
            "unit": "iter/sec",
            "range": "stddev: 0.00012356829884838",
            "extra": "mean: 71.09249755434938 usec\nrounds: 8383"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3804532.7699927264,
            "unit": "iter/sec",
            "range": "stddev: 6.287905916752519e-7",
            "extra": "mean: 262.84436498674097 nsec\nrounds: 169492"
          }
        ]
      }
    ]
  }
}