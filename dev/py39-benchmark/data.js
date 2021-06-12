window.BENCHMARK_DATA = {
  "lastUpdate": 1623522555852,
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
          "id": "524fcfa4814833ce53b5f0a218a10ca9126b7ce6",
          "message": ":memo: Refactor bash highlighting role into `global.rst`",
          "timestamp": "2021-06-12T18:24:03Z",
          "tree_id": "b96a91c1d6f8975062cfaac57fa472aa4229a1fd"
        },
        "date": 1623522554815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15434.018493892834,
            "unit": "iter/sec",
            "range": "stddev: 0.000023535787026953514",
            "extra": "mean: 64.7919399860571 usec\nrounds: 10964"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4190021.3018989614,
            "unit": "iter/sec",
            "range": "stddev: 3.200479525904276e-8",
            "extra": "mean: 238.66227113146007 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13589.061668765531,
            "unit": "iter/sec",
            "range": "stddev: 0.000027599482626855182",
            "extra": "mean: 73.58859826933457 usec\nrounds: 5200"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130612.60625877901,
            "unit": "iter/sec",
            "range": "stddev: 8.985946089318383e-7",
            "extra": "mean: 7.656228817750782 usec\nrounds: 42370"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15695.826243142883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002848816905598842",
            "extra": "mean: 63.71120478202765 usec\nrounds: 13175"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4203353.256825471,
            "unit": "iter/sec",
            "range": "stddev: 4.4248017183670984e-8",
            "extra": "mean: 237.9052958198666 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}