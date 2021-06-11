window.BENCHMARK_DATA = {
  "lastUpdate": 1623370321082,
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
          "id": "747446184a21e312b46d4e53c365dc1e5955ca42",
          "message": ":green_heart: Remove spurious Git submodule reference",
          "timestamp": "2021-06-11T00:07:29Z",
          "tree_id": "04a4f6dd000af97aa5204be54beed0a25f0b0d58"
        },
        "date": 1623370320249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15168.673426374284,
            "unit": "iter/sec",
            "range": "stddev: 0.000011646776398187942",
            "extra": "mean: 65.92534309963231 usec\nrounds: 5666"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5037751.895764303,
            "unit": "iter/sec",
            "range": "stddev: 1.0988477275730113e-8",
            "extra": "mean: 198.5012403729322 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13437.149047683599,
            "unit": "iter/sec",
            "range": "stddev: 0.000014180736336290101",
            "extra": "mean: 74.42054832102855 usec\nrounds: 5391"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149394.9202634559,
            "unit": "iter/sec",
            "range": "stddev: 4.136609859110481e-7",
            "extra": "mean: 6.693668019210517 usec\nrounds: 51018"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14992.38300235397,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199891636874901",
            "extra": "mean: 66.70053718898383 usec\nrounds: 14144"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5053520.886350602,
            "unit": "iter/sec",
            "range": "stddev: 9.636947223957767e-8",
            "extra": "mean: 197.8818377304011 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}