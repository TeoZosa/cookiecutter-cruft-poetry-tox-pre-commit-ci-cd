window.BENCHMARK_DATA = {
  "lastUpdate": 1629251115406,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "ad4beb9d69bda80ece8aae9428e7d7142ae3a038",
          "message": ":green_heart: Re-enable CI failure on Codecov upload failures\n\nsee: codecov/codecov-action/issues/330\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-18T01:38:27Z",
          "tree_id": "55061e7ca49fc4583afebaab47e01326e77373be"
        },
        "date": 1629251113133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14916.350091967885,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240370146092649",
            "extra": "mean: 67.0405289386763 usec\nrounds: 12423"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4357534.253646302,
            "unit": "iter/sec",
            "range": "stddev: 4.3611226407913867e-7",
            "extra": "mean: 229.48758214879905 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12725.043102169924,
            "unit": "iter/sec",
            "range": "stddev: 0.000017347528057491883",
            "extra": "mean: 78.5851955055049 usec\nrounds: 7831"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134543.13416601883,
            "unit": "iter/sec",
            "range": "stddev: 0.000011112429890896531",
            "extra": "mean: 7.4325606148438235 usec\nrounds: 49262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15270.12239180998,
            "unit": "iter/sec",
            "range": "stddev: 0.000014872482550641263",
            "extra": "mean: 65.48735984829715 usec\nrounds: 9479"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4561003.192777026,
            "unit": "iter/sec",
            "range": "stddev: 3.1108905606521834e-7",
            "extra": "mean: 219.2500109587335 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}