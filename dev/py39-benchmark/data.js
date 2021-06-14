window.BENCHMARK_DATA = {
  "lastUpdate": 1623632469188,
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
          "id": "0a9ea9bc73049f753aedf68dcbaa18982486c15f",
          "message": ":fire: Remove deprecated `.gitlab-ci.yml` from cookiecutter",
          "timestamp": "2021-06-14T00:56:05Z",
          "tree_id": "dbdc1965f544ed5e14c493855dffe4ffe7402a7d"
        },
        "date": 1623632467566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15009.178655034004,
            "unit": "iter/sec",
            "range": "stddev: 0.000025581155499973918",
            "extra": "mean: 66.6258975913119 usec\nrounds: 11376"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3885532.4971029945,
            "unit": "iter/sec",
            "range": "stddev: 6.532498558459388e-8",
            "extra": "mean: 257.3649816969906 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13412.04037925963,
            "unit": "iter/sec",
            "range": "stddev: 0.000021751093169441253",
            "extra": "mean: 74.55987096090162 usec\nrounds: 8912"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130700.47792982696,
            "unit": "iter/sec",
            "range": "stddev: 4.1639230848930345e-7",
            "extra": "mean: 7.651081433205621 usec\nrounds: 43287"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15648.434628806792,
            "unit": "iter/sec",
            "range": "stddev: 0.000016144151203292867",
            "extra": "mean: 63.90415550953105 usec\nrounds: 13549"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3950785.437308693,
            "unit": "iter/sec",
            "range": "stddev: 2.1402004385969326e-7",
            "extra": "mean: 253.11422649193725 nsec\nrounds: 5225"
          }
        ]
      }
    ]
  }
}