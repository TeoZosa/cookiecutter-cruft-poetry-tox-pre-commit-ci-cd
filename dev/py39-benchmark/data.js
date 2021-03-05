window.BENCHMARK_DATA = {
  "lastUpdate": 1614970272058,
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
      }
    ]
  }
}