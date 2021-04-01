window.BENCHMARK_DATA = {
  "lastUpdate": 1617238782852,
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
      }
    ]
  }
}